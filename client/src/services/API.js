import axios from "axios";

const BASEURL = "http://localhost:8000/api/v1/";
const API = axios.create({ baseURL: BASEURL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
  }
  return req;
});

export default API;
