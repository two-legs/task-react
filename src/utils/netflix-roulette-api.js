import fetch from 'isomorphic-fetch';
import qs from 'qs';

const API_TOKEN = 'af2d44841a499a2e1df9d9c8e1739dd0';
const API_URL = 'https://api.themoviedb.org/3';

const defaultParams = {
  api_key: API_TOKEN,
  language: 'en-US',
};

let genresList = [];

const genres = async () => {
  if (genresList.length > 0) return genresList;

  const response = await fetch(`${API_URL}/genre/movie/list?${qs.stringify(defaultParams)}`);
  if (response.status >= 400 && response.status < 600) {
    throw new Error(await response.json().status_message || 'Can\'t load search results');
  }
  const result = await response.json();
  genresList = result.genres;

  return genresList;
};

const genreById = async (id) => {
  if (genresList.length === 0) await genres();

  return genresList.find(item => item.id === id);
};

async function mapFields(apiResult) {
  if (apiResult instanceof Array) {
    return await Promise.all(apiResult.map(item => mapFields(item)));
  }
  const genre = await genreById(apiResult.genre_ids[0]);
  const year = apiResult.release_date.split('-')[0];

  return {
    id: apiResult.id,
    title: apiResult.title,
    releaseYear: year, // todo
    rating: apiResult.vote_average,
    category: genre.name, // genres
    showCast: apiResult.show_cast,
    director: apiResult.director,
    summary: apiResult.overview,
    poster: `https://image.tmdb.org/t/p/w300_and_h450_bestv2${apiResult.poster_path}`,
    runtime: apiResult.runtime,
  };
}

function apiAdapter(apiResult) {

};

export async function loadData(params) {
  const response = await fetch(`${API_URL}?${qs.stringify(params)}`);
  if (response.status >= 400 && response.status < 600) {
    throw new Error(await response.json());
  }
  return await mapFields(await response.json());
}

export async function search(params) {
  const queryParams = { ...defaultParams, ...params };
  const response = await fetch(`${API_URL}/search/movie?${qs.stringify(queryParams)}`);

  if (response.status >= 400 && response.status < 600) {
    throw new Error(await response.json().status_message || 'Can\'t load search results');
  }

  const result = await response.json();
  const mappedResult = await mapFields(result.results);

  return mappedResult;
}


