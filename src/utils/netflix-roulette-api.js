import fetch from 'isomorphic-fetch';
import qs from 'qs';

const API_URL = 'https://netflixroulette.net/api/api.php';

function mapFields(apiResult) {
  if (apiResult instanceof Array) {
    return apiResult.map(item => mapFields(item));
  }
  return {
    unit: apiResult.unit,
    id: apiResult.show_id,
    title: apiResult.show_title,
    releaseYear: apiResult.release_year,
    rating: apiResult.rating,
    category: apiResult.category,
    showCast: apiResult.show_cast,
    director: apiResult.director,
    summary: apiResult.summary,
    poster: apiResult.poster,
    mediatype: apiResult.mediatype,
    runtime: apiResult.runtime,
  };
}

export default async function loadData(params) {
  try {
    const response = await fetch(`${API_URL}?${qs.stringify(params)}`, {mode: 'cors'});
    if (response.status === 404) throw new Error(response.json())
    return mapFields(await response.json());
  } catch (e) {
    throw new Error('Can\'t load data');
  }
}
