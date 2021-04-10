import axios from "axios";

const list = () => axios.get("/links");

const create = payload => axios.post("/links/", payload);

const show = slug => axios.get("/links/" + slug);

const update = id => axios.put("/links/" + id);

const linksApi = {
  list,
  create,
  show,
  update,
};

export default linksApi;
