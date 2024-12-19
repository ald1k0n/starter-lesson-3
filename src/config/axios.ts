import axios from "axios";

export const api = axios.create({
  baseURL: "https://post-lesson.onrender.com/api",
});

api.interceptors.request.use((response) => {
  if (localStorage.getItem("token")) {
    response.headers.set("Authorization", localStorage.getItem("token"));
  }

  return response;
});
