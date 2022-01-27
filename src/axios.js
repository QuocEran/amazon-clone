import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:5001/clone-e5ac8/us-central1/api", // clound function

  baseURL: "https://amazon-clone-api-eran.herokuapp.com",
});

export default instance;
