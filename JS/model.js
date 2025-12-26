// import { UPCOMING_URL } from "./config";
// import { API_URL } from "./config";
// import { TRENDING_URL } from "./config";
import { OPENING_WEEK, SEARCH_URL, UPCOMING_URL } from './config.js';
import { TRENDING_URL } from './config.js';
// import { OPENING_WEEK } from './config.js';
import { getJson } from './helpers.js';
// console.log(TRENDING_URL);
// console.log(getJson);G
export const state = {
  film: {},
  preview: [],
  watchList: [],
  openingWeek: [],
  upcoming: [],
  search: {
    query: '',
    results: [],
    page: 1,
  },
};

export const stateFilm = async function () {
  const response = await getJson(`${TRENDING_URL}`);
  const weekFilm = await getJson(`${OPENING_WEEK}`);
  const upcoming = await getJson(`${UPCOMING_URL}`);

  state.openingWeek = weekFilm.results.slice(1, 17);

  state.upcoming = upcoming.results.slice(0, 10);
  state.preview = response.results.slice(0, 6);
};

export const loadFIlm = async function (query) {
  try {
    const data = await getJson(`${SEARCH_URL}${query}`);
    state.search.query = query;

    console.log(data);
    state.search.results = data.results.map(result => {
      return {
        id: result.id,
        info: result.overview,
        releaseDate: result.release_date,
        posterPath: result.poster_path,
        title: result.title,
        ratings: result.vote_average,
      };
    });

    console.log(state.search.results);
  } catch (err) {
    console.error(err);
  }
};
