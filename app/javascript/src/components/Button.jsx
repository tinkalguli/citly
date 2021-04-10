import React from "react";
import PropTypes from "prop-types";

const Button = ({ type = "button", buttonText, onClick, loading }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative flex justify-center w-max px-4 py-2
        text-sm font-medium leading-5 text-white transition duration-150
         ease-in-out bg-purple-600 border border-transparent rounded
         group hover:bg-purple-500 focus:outline-none ${
    loading ? "pointer-events-none cursor-not-allowed bg-purple-500" : ""
    }`}
    >
      {loading ? "Loading..." : buttonText}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  buttonText: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};
export default Button;
