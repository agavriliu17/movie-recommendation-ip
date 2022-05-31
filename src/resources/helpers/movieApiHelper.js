import { BASE_URL, MY_LIST } from "../constants";
import axios from "axios";

export const getTopRated = async () => {
  const authToken = sessionStorage.getItem("isAuthenticated");

  const movieData = await axios
    .get(`${BASE_URL}/movies?page=1&size=10`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .then((res) => res.data.movies);

  return movieData;
};

export const getMoviesByGenre = async (genre, page, size) => {
  const authToken = sessionStorage.getItem("isAuthenticated");

  const movieData = await axios
    .get(
      `${BASE_URL}/movies/types?page=${page ?? 1}&size=${
        size ?? 10
      }&type=${genre}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    )
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

export const getMoviesByName = async (name, page, size) => {
  const authToken = sessionStorage.getItem("isAuthenticated");

  const movieData = await axios
    .get(
      `${BASE_URL}/movies/names?name=${name}&page=${page - 1}&size=${size}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    )
    .then((res) => res.data);

  return movieData;
};

export const getMyList = async (userId) => {
  const authToken = sessionStorage.getItem("isAuthenticated");
  const id = userId;
  if (id) {
    const movieData = await axios
      .get(`${BASE_URL}/movielists/list?lname=${MY_LIST}&userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((res) => res.data);

    return movieData;
  }
};

export const addToMyList = async (userId, movieId) => {
  const authToken = sessionStorage.getItem("isAuthenticated");

  const res = await axios.post(
    `${BASE_URL}/movielists/add?lname=${MY_LIST}&movieId=${movieId}&userId=${userId}`,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  console.log(res);
  if (res.status === 200) {
    return true;
  } else {
    throw new Error("Something went wong");
  }
};

export const getPredictions = async (userId) => {
  const authToken = sessionStorage.getItem("isAuthenticated");

  const movieData = await axios
    .get(`${BASE_URL}/ratings/u${userId}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .then((res) => res.data);

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

    return moviePrediction;
  } else {
    const genericPrediction = await axios
      .get(`${BASE_URL}/ratings/all`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((res) => res.data);

    return genericPrediction;
  }
};
