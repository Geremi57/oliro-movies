//weather api call
const search = document.querySelector('.searchInput');
const searchButton = document.querySelector('.searchButton');
const countriesContainer = document.querySelector('.countries');
const spinner = document.querySelector('.dot-spinner');
const imageParentHolder = document.querySelector('.swiper-slide');
const parentDiv = document.querySelector('.swiper-wrapper');
const signIn = document.querySelector('.btn');
const title = document.querySelectorAll('.title');
const container = document.querySelector('.coming-container');
const header = document.querySelector('header');
const swiperSlide = document.querySelector('.movies-container');
const upcoming = document.querySelector('.coming-container');
const homeText = document.querySelector('.home-text');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
const boxMovie = swiperSlide.querySelectorAll('.box-img');
const playIcon = swiperSlide.querySelectorAll('.play-icon');
const elIcon = [];
const elArray = [];
const elTitle = [];
console.log(container);
// swiperSlide
//   .querySelectorAll(".box")
//   .forEach((el) => (el.innerHTML = "taaaaaah"));
// console.log(swiperSlide.querySelectorAll(".box"));

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

var swiper = new Swiper('.home', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 14000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
var swiper = new Swiper('.coming-container', {
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    568: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    968: {
      slidesPerView: 5,
    },
  },
});
const loopSwitchImage = function (element) {
  // setTimeout(() => {
  for (const el of element) {
    elArray.push(el.poster_path);
    elTitle.push(el.original_title || el.name);
  }
  console.log(elArray);
};
const insert = function (images, titles) {
  parentDiv.querySelectorAll('.swiper-slide').forEach(function (el, count) {
    const markup = `<img class = "img" src = "https://image.tmdb.org/t/p/original${images[count]}"/>
    <div class="home-text">
            <span>oliro movies</span>
            <h1 class="title">${elTitle[count]}
            </h1><a href="./watch.html" >
      <button class="watch">
        Watch
        </button>
        </a>

            
            </div>
            `;
    // ((title.textContent = `${elTitle[count]}`));

    //OPENING THIS WEEEK MOVIES
    el.innerHTML = markup;
    console.log(el);
  });
  boxMovie.forEach((el, count) => {
    const sliceImages = images.slice(4);
    const html = `<img src = "https://image.tmdb.org/t/p/original${sliceImages[count]}"/> <i class='bx bx-play-circle play-icon hidden'></i> `;
    el.innerHTML = html;
    console.log(document.querySelector('.play-icon')[count]);
    // console.log(el.playIcon[count].classList);
    el.style.filter = 'blur(1px)';

    el.addEventListener('mouseenter', function () {
      document.querySelectorAll('.play-icon')[count].classList.toggle('hidden');
      el.style.filter = 'blur(0px)';
    });

    el.addEventListener('mouseleave', function () {
      document.querySelectorAll('.play-icon')[count].classList.add('hidden');
      el.style.filter = 'blur(1px)';
    });

    console.log(document.querySelectorAll('.play-icon')[count].classList);
  });
  elIcon.push(...document.querySelectorAll('.play-icon'));
  console.log(elIcon);
  // return array[count];
  // console.log(array[count]);
};

// const renderUpcoming =

const upcomingFetch = async function () {
  const imgArray = [];
  const response = await fetch(
    'https://api.themoviedb.org/3/movie/upcoming?api_key=a22e2ff858c7e9d92ab86711c01b6242&language=en-US&page=3'
  );
  const res = await response.json();
  const { results } = await res;
  console.log(response, res.results, results.slice(4));
  results.forEach(el => {
    imgArray.push(el.poster_path);
    upcoming.querySelectorAll('.box-img').forEach((el, count) => {
      const html = `<img src = "https://image.tmdb.org/t/p/original${imgArray[count]}"/>`;
      el.innerHTML = html;
    });
  });
};

upcomingFetch();
// ("https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc");

const fetchImage = async function () {
  const response = await fetch(
    // `https://api.themoviedb.org/3/discover/movie?api_key=a22e2ff858c7e9d92ab86711c01b6242&include_adult=true&language=en-US&sort_by=popularity.desc&page=12`
    // "https://api.themoviedb.org/3/movie/popular?api_key=a22e2ff858c7e9d92ab86711c01b6242"
    // "https://api.themoviedb.org/3/trending/movie/week?api_key=a22e2ff858c7e9d92ab86711c01b6242"
    'https://api.themoviedb.org/3/trending/all/week?api_key=a22e2ff858c7e9d92ab86711c01b6242&language=en-US&page=3'
  );

  const res = await response.json();
  console.log(response, res);
  const { results } = await res;
  console.log(results, res);

  const data = await results.map((el, count) => (el.adult === false ? el : ''));
  loopSwitchImage(data);
  insert(elArray, elTitle);
  console.log(title);
  // window.addEventListener("load", function () {

  // console.log(markup);

  const foo = function (array) {
    const done = parentDiv.childNodes.forEach((_, count) =>
      true ? array[count] : ''
    );

    return done;
  };

  console.log(foo(elArray));

  // title.textContent = `${results[0].original_title}`;
  // });
  console.log(data, results.length);
  // insertImage(data);
};

fetchImage();

// image to be rendered
// searchButton.addEventListener("click", function (e) {
//   e.preventDefault();

// console.log(search.value);
const movieData = async function () {
  countriesContainer.innerHTML = ' ';

  const markup = `
  <div class="dot-spinner">
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
  </div>`;
  const render = await countriesContainer.insertAdjacentHTML(
    'beforeend',
    markup
  );
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=a22e2ff858c7e9d92ab86711c01b6242&query=flash}`
    );
    const unrenderSpinner =
      countriesContainer.childNodes[2].classList.add('hidden');

    const data = await response.json();

    console.log(response);
    console.log(data);
    if (data.results == false) throw new Error('Media not found');
    // .then((response) => response.json())
    // .then((data) => {
    const res = data.results;
    console.log(...res);
    const posters = res.map(entry => entry);
    console.log(posters);

    posters.forEach(async function (one, count) {
      // console.log(count);

      if (count === 0) {
        const dis = `<article class ="firstEl">
<img class="country__img" src="https://image.tmdb.org/t/p/original${one.poster_path}" alt = ${one.original_title}/>
<div class="country__data">
<a
<button class = "btn" href ="https://vidsrc.xyz/embed/movie?tmdb=${one.id}">
 Watch
 </button>
 </a></article>`;
        console.log(dis);
        // one.classList.add("gotchaa");
        console.log('ndio hiiiii');
        console.log(one);
        const render = await countriesContainer.insertAdjacentHTML(
          'beforeend',
          dis
        );
      } else {
        const html = `<article class="country">
<img class="country__img" src="https://image.tmdb.org/t/p/original${one.poster_path}" alt = ${one.original_title}/>
<div class="country__data">
<a
<button class = "btn" href ="https://vidsrc.xyz/embed/movie?tmdb=${one.id}">
 Watch
 </button>
 </a></article>`;

        // console.log(html);
        // <h3 class="country__name">${one.original_title}</h3>`;

        // <p class="country__row"><span>🗣️</span>About: ${one.overview} </p>
        //   <p class="country__row"><span>📅</span>Release: ${
        //     one.release_date ?? "_"
        //   }</p>
        //   <p class="country__row"><span>👍</span>Ratings: ${one.vote_average ?? "_"}
        //   </p>
        // </div>
        // </article>;
        const render = await countriesContainer.insertAdjacentHTML(
          'beforeend',
          html
        );
      }
    });
  } catch (err) {
    console.error(err);
  }
};

// searchButton.addEventListener("click", function () {
//   movieData();
// });
// addEventListener("load", function () {
// });

// console.log(countriesContainer.querySelector(".dot-spinner").classList);
// countriesContainer.children.forEach((el) => el.classlist.add("hidden"));

document.addEventListener('keydown', event =>
  // console.log(event);
  event.key === 'Enter' ? movieData() : ''
);

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjJlMmZmODU4YzdlOWQ5MmFiODY3MTFjMDFiNjI0MiIsIm5iZiI6MTc0NDczNjI5Mi44NDgsInN1YiI6IjY3ZmU5MDI0ZDY0NWU0MWUwOTk5MmE0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lGgMPmn5SEaT9rv0LxE5Cq59qskCLwvRO3fU80kwcAM",
//   },
// };

// fetch(
//   `http://files.tmdb.org/p/exports/adult_movie_ids_05_15_2024.json.gz`,
//   options
// )
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
// // const options = { method: "GET", headers: { accept: "application/json" } };

// // fetch("https://api.themoviedb.org/3/authentication", options)
// //   .then((res) => res.json())
// //   .then((res) => console.log(res))
// //   .catch((err) => console.error(err));

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjJlMmZmODU4YzdlOWQ5MmFiODY3MTFjMDFiNjI0MiIsIm5iZiI6MTc0NDczNjI5Mi44NDgsInN1YiI6IjY3ZmU5MDI0ZDY0NWU0MWUwOTk5MmE0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lGgMPmn5SEaT9rv0LxE5Cq59qskCLwvRO3fU80kwcAM",
//   },
// };

// fetch("https://api.themoviedb.org/3/authentication", options)
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
