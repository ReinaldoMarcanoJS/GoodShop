import axios from "./axios";
import { LoginUser, User } from "../types";

export const apiRegister = async (user: User) => {
  const response = await axios.post("/register", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    password: user.password,
  });

  return response;
};

export const apiLogin = async (user: LoginUser) => {
  console.log(user);

  const response = await axios.post("/login", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },
    email: user.email,
    password: user.password,
  });
  console.log(response);

  return response;
};

export const apiLogout = async () => {
  const response = await axios.post("/logout", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  console.log(response);

  return response;
};
