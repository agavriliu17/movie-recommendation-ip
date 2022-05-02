import axios from "axios";

const BASE_URL = "https://movie-recommendation-ip.herokuapp.com/";

//Here we'll store our helper functions for auth pages

export const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const registerUser = async (userInfo) => {
  console.log(userInfo);
  console.log(`${BASE_URL}api/v1/users`);
  const res = axios.post(`${BASE_URL}api/v1/users`, {
    email: userInfo.email,
    firstname: userInfo.firstName,
    lastname: userInfo.lastName,
    password: userInfo.password,
    username: "test",
  });

  if (res.status === 200) {
    return true;
  } else throw new Error("Something went wrong, please try again!");
};
