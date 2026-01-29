export const UPCOMING_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=a22e2ff858c7e9d92ab86711c01b6242&language=en-US&include_adult=true&page=1`;

export const TRENDING_URL = `https://api.themoviedb.org/3/trending/all/day?api_key=a22e2ff858c7e9d92ab86711c01b6242&language=en-US&include_adult=true&page=1`;

export const OPENING_WEEK = `https://api.themoviedb.org/3/trending/all/week?api_key=a22e2ff858c7e9d92ab86711c01b6242&include_adult=false&language=en-US&page=3`;

export const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=a22e2ff858c7e9d92ab86711c01b6242&include_adult=false&page2&query="`;

export const GENRE_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=a22e2ff858c7e9d92ab86711c01b6242`;



// console.log(GENRE_URL.json());

// const genres = async function () {
//   const wait = await fetch(GENRE_URL);
//   const data = await wait.json();

//   console.log(data.genres);
// };

// genres();
