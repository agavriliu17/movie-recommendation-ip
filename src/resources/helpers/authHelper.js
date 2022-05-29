import axios from "axios";
import qs from "qs";

import { BASE_URL } from "../constants";

//Here we'll store our helper functions for auth pages
export const validateEmail = (email) => {
  const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
  return re.test(email);
};

export const validatePassword = (password) => {
  const re =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–/|{}\\:;'\-%`€"_.,?*~$^+=<>\][]).{6,}$/;
  return re.test(password);
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
  } else {
    throw new Error(`${res.body}`);
  }
};

export const registerUser = async (userInfo) => {
  const res = await axios.post(`${BASE_URL}/users`, {
    email: userInfo.email,
    firstname: userInfo.firstName,
    lastname: userInfo.lastName,
    password: userInfo.password,
    username: userInfo.username,
  });

  console.log(res);
  if (res.status === 201) {
    return true;
  } else {
    throw new Error(res.message);
  }
};

export const sendMail = async (mailInfo) => {
  const res = await axios.post(
    `${BASE_URL}/reset-password/${mailInfo.email.replace("@", "%40")}`,
    {
      email: mailInfo.email,
    }
  );

  if (res.status === 200) {
    return true;
  } else return res.status;
};

export const sendRequestReset = async (info, token) => {
  const res = await axios.post(`${BASE_URL}/reset-password`, {
    confirmPassword: info.confirmPassword,
    newPassword: info.password,
    resetToken: token,
  });

  if (res.status === 200) {
    return true;
  } else return res.status;
};

export const getUserDetails = async () => {
  const authToken = sessionStorage.getItem("isAuthenticated");

  if (authToken) {
    const userData = await axios
      .get(`${BASE_URL}/users/jwt`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((res) => res.data);

    return userData;
  }
  return;
};

export const updateUser = async (userInfo, id) => {
  const authToken = sessionStorage.getItem("isAuthenticated");

  const res = await axios({
    method: "put",
    url: `${BASE_URL}/users/${id}`,
    data: {
      email: userInfo.email,
      firstname: userInfo.firstName,
      lastname: userInfo.lastName,
      username: userInfo.username,
    },
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  console.log(res);

  if (res.status === 200) {
    return true;
  } else {
    throw new Error("Something went wong");
  }
};

export const deleteUser = async (userId) => {
  const authToken = sessionStorage.getItem("isAuthenticated");

  const res = await axios.delete(`${BASE_URL}/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  if (res.status === 200) {
    return true;
  } else {
    throw new Error("Something went wong");
  }
};
