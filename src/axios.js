import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-e5ac8/us-central1/api", // clound function
  // "https://us-central1-challenge-4b2b2.cloudfunctions.net/api",
});

export default instance;
