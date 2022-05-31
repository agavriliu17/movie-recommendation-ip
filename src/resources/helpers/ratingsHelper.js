import { BASE_URL } from "../constants";
import axios from "axios";

export const getMovieRating = async (movieId, userId) => {
  const authToken = sessionStorage.getItem("isAuthenticated");

  const userRating = await axios
    .get(`${BASE_URL}/ratings/ids?movieId=${movieId}&userId=${userId}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .then((res) => res.data);
  return userRating;
};

export const updateRating = async (movieId, userId, rating) => {
  const authToken = sessionStorage.getItem("isAuthenticated");

  const res = await axios({
    method: "post",
    url: `${BASE_URL}/ratings`,
    data: { label: true, movieId: movieId, rating: rating, userId: userId },
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Access-Control-Allow-Origin": "*",
    },
  });

  if (res.status === 201) {
    return true;
  } else {
    throw new Error(`${res.body}`);
  }
};
