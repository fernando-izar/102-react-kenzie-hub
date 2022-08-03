import axios from "axios";

export const api = axios.create({
  baseURL: "https://kenzieshop.herokuapp.com",
  timeout: 5000,
});
