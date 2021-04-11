import axios from "axios";
import Toastr from "components/Common/Toastr";

axios.defaults.headers = {
  Accept: "applicaion/json",
  "Content-Type": "application/json",
  "X-CSRF-TOKEN": document
    .querySelector('[name="csrf-token"]')
    .getAttribute("content"),
};

const handleSuccessResponse = response => {
  if (response) {
    response.success = response.status === 200;
    if (response.data.notice) {
      Toastr.success(response.data.notice);
    }
  }
  return response;
};

const handleErrorResponse = error => {
  if (error.response?.data?.info) {
    Toastr.info(error.response?.data?.info);
  } else {
    Toastr.error(
      error.response?.data?.errors ||
        error.response?.data?.notice ||
        error.message ||
        error.notice ||
        "Something went wrong!"
    );
  }

  if (error.response?.status === 423) {
    window.location.href = "/";
  }
  return Promise.reject(error);
};

export const registerIntercepts = () => {
  axios.interceptors.response.use(handleSuccessResponse, error =>
    handleErrorResponse(error)
  );
};
