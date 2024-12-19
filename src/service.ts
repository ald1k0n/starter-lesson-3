import { notification } from "antd";
import { api } from "./config/axios";
import { User } from "./App";

export const register = async (payload: User) => {
  try {
    const response = await api.post("/users", payload);
    return response;
  } catch (e) {
    console.log(e);
    notification.error({
      message: "error happened",
    });
  }
};

export const login = async (payload: Omit<User, "username">) => {
  try {
    const response = await api.post<{
      token: string;
    }>("/users/login", payload);
    return response.data;
  } catch (e) {
    console.log(e);

    notification.error({
      message: "error happened",
    });
  }
};
