import axios from "axios";

import { BASE_URL } from "../constants";

export const getMovieComments = async (id) => {
  const authToken = sessionStorage.getItem("isAuthenticated");

  const comments = await axios
    .get(`${BASE_URL}/comments/?movieId=${id}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .then((res) => res.data);

  return comments;
};

export const postComment = async (comment, movieId, userId) => {
  const authToken = sessionStorage.getItem("isAuthenticated");

  try {
    const res = await axios({
      method: "post",
      url: `${BASE_URL}/comments`,
      data: {
        content: comment,
        movieId: movieId,
        userId: userId,
        date: Date.now(),
      },
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (res.status === 200) {
      return true;
    } else {
      throw new Error(`${res.body}`);
    }
  } catch (e) {
    console.log(e);
  }
};
