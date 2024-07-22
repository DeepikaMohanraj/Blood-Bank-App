import axios from "axios";

const API = axios.create({ baseURL: 'https://blood-bank-app-jdm5.onrender.com/api/v1' });//server
//to send token under authorization
API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
  }
  return req;
});

export default API;
