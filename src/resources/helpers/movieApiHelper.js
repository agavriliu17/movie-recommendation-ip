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

export const getMyList = async () => {
  const authToken = sessionStorage.getItem("isAuthenticated");

  const movieData = await axios
    .get(`${BASE_URL}/movielists`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .then((res) => res.data);

  return movieData;
};
