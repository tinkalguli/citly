import axios from "axios";

const list = () => axios.get("/links");

const create = payload => axios.post("/links/", payload);

const linksApi = {
  list,
  create,
};

export default linksApi;
