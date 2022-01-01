import axios from "axios";

const instance = axios.create({
  baseUrl: "", // clound function
});

export default instance;
