import axios from 'axios';
import {API_KEY} from '@env';

const baseUrl = 'https://api.themoviedb.org/3';
const trending = `${baseUrl}/trending/movie/day?api_key=${API_KEY}`;
const topRated = `${baseUrl}/movie/top_rated?api_key=${API_KEY}`;
const upcoming = `${baseUrl}/movie/upcoming?api_key=${API_KEY}`;

const movieDetails = id => `${baseUrl}/movie/${id}?api_key=${API_KEY}`;
const movieCredits = id => `${baseUrl}/movie/${id}/credits?api_key=${API_KEY}`;
const similarMovies = id => `${baseUrl}/movie/${id}/similar?api_key=${API_KEY}`;

const personDetails = id => `${baseUrl}/person/${id}?api_key=${API_KEY}`;
const personMovies = id =>
  `${baseUrl}/person/${id}/movie_credits?api_key=${API_KEY}`;

const searchMovies = `${baseUrl}/search/movie?api_key=${API_KEY}`;

const apiCall = async (endpoints, params) => {
  const options = {method: 'GET', url: endpoints, params: params ? params : {}};

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log('error', error);
    return {};
  }
};

export const fetchTrendingMovies = () => {
  return apiCall(trending);
};
export const fetchTopRatedMovies = () => {
  return apiCall(topRated);
};
export const fetchUpcomingMovies = () => {
  return apiCall(upcoming);
};

export const fetchMovieDetails = id => {
  return apiCall(movieDetails(id));
};
export const fetchMovieCredits = id => {
  return apiCall(movieCredits(id));
};
export const fetchSimilarMovies = id => {
  return apiCall(similarMovies(id));
};

export const fetchPersonDetails = id => {
  return apiCall(personDetails(id));
};
export const fetchPersonMovies = id => {
  return apiCall(personMovies(id));
};

export const fetchSearchMovies = params => {
  return apiCall(searchMovies, params);
};
