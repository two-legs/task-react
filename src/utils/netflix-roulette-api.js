import fetch from 'isomorphic-fetch';
import qs from 'qs';

const API_TOKEN = 'af2d44841a499a2e1df9d9c8e1739dd0';
const API_URL = 'https://api.themoviedb.org/3';

const defaultParams = {
  api_key: API_TOKEN,
  language: 'en-US',
};

function mapFields(apiResult) {
  if (apiResult instanceof Array) {
    return apiResult.map(item => mapFields(item));
  }
  return {
    id: apiResult.id,
    title: apiResult.title,
    releaseYear: apiResult.release_date, // todo
    rating: apiResult.vote_average,
    category: apiResult.category, // genres
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
  const response = await fetch(`${API_URL}?${qs.stringify(params)}`, { mode: 'cors' });
  if (response.status >= 400 && response.status < 600) {
    throw new Error(await response.json());
  }
  return mapFields(await response.json());
}

export async function search(params) {
  const queryParams = { ...defaultParams, ...params };
  const response = await fetch(`${API_URL}/search/movie?${qs.stringify(queryParams)}`);

  if (response.status >= 400 && response.status < 600) {
    throw new Error(await response.json().status_message || 'Can\'t load search results');
  }
  return mapFields(await response.json());
}
