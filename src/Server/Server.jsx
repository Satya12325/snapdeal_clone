import axios from "axios";

export const api = axios.create({
  baseURL: "https://snapdeal-backend.herokuapp.com/",
});