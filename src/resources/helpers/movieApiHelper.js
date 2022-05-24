import { BASE_URL } from "../constants";
import axios from "axios";

export const getTopRated = async () => {
  const authToken = sessionStorage.getItem("isAuthenticated");

  const movieData = await axios
    .get(`${BASE_URL}/movies?page=1&size=10`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .then((res) => res.data);

  return movieData;
};

export const getMoviesByGenre = async (genre) => {
  const authToken = sessionStorage.getItem("isAuthenticated");

  const movieData = await axios
    .get(`${BASE_URL}/movies/types?page=1&size=10&type=${genre}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .then((res) => res.data);

  return movieData;
};

export const getMoviesById = async (id) => {
  const authToken = sessionStorage.getItem("isAuthenticated");

  const movieData = await axios
    .get(`${BASE_URL}/movies/${id}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .then((res) => res.data);

  return movieData;
};

export const getMoviesByName = async (name) => {
  const authToken = sessionStorage.getItem("isAuthenticated");

  const movieData = await axios
    .get(`${BASE_URL}/movies/names?name=${name}&page=1&size=10`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .then((res) => res.data);

  return movieData;
};

export const getMyList = async (userId) => {
  const authToken = sessionStorage.getItem("isAuthenticated");

  const movieData = await axios
    .get(`${BASE_URL}/movielists/user?user_id=${userId}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .then((res) => res.data);
  console.log(movieData);

  return movieData;
};

export const getPredictions = async () => {
  const authToken = sessionStorage.getItem("isAuthenticated");

  const movieData = await axios
    .get(`${BASE_URL}/ratings/1`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .then((res) => res.data);

  console.log(movieData);
  if (movieData.length >= 3) {
    const moviePrediction = await axios({
      method: "post",
      url: `${BASE_URL}/movies/predictions/10`,
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      data: movieData,
    }).then((res) => res.data);

    console.log(moviePrediction);
    return moviePrediction;
  } else {
    const genericPrediction = await axios
      .get(`${BASE_URL}/ratings/all`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((res) => res.data);

    console.log(genericPrediction, "generic");
  }
};
