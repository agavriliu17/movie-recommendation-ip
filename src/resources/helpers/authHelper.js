import axios from "axios";
import qs from "qs";

import { BASE_URL } from "../constants";

//Here we'll store our helper functions for auth pages
export const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const loginUser = async (userInfo) => {
  const res = await axios({
    method: "post",
    url: `${BASE_URL}/login`,
    data: qs.stringify({
      username: userInfo.username,
      password: userInfo.password,
    }),
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });

  const token = res.headers.authorization.substring(
    7,
    res.headers.authorization.length
  );

  if (res.status === 200) {
    return token;
  } else throw new Error("Something went wrong, please try again!");
};

export const registerUser = async (userInfo) => {
  const res = await axios.post(`${BASE_URL}/users`, {
    email: userInfo.email,
    firstname: userInfo.firstName,
    lastname: userInfo.lastName,
    password: userInfo.password,
    username: userInfo.username,
  });

  if (res.status === 200) {
    return true;
  } else throw new Error("Something went wrong, please try again!");
};

export const sendMail=async(mailInfo) =>
{
  const res = await axios.post(`${BASE_URL}/reset-password/${mailInfo.email.replace("@","%40")}`, {
    email: mailInfo.email,
  });

  if (res.status === 200) {
    return true;
  } else return res.status;
};

export const sendRequestReset=async(info) =>
{
  const res = await axios.post(`${BASE_URL}/reset-password`, {
    confirmPassword: info.confirmPassword,
    newPassword:info.password,
    resetToken:info.token,
  });
  console.log(info.token);
  if (res.status === 200) {
    return true;
  } else return res.status;
  
}


