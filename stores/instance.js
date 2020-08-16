import axios from "axios";

const instance = axios.create({
  baseURL: "https://vast-hollows-61876.herokuapp.com",
});

export default instance;
