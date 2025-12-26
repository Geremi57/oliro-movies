import * as model from './model.js';
import { TRENDING_URL } from './config.js';
import mainView from './views/mainView.js';
// import SearchView from "./views/searchView.js";
import previewView from './views/previewView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import openingWeekView from './views/openingWeekView.js';
import upcomingView from './views/upcomingView.js';
import filmView from './views/filmView.js';

// console.log(TRENDING_URL);
// console.log(model.loadFIlm);
const modal = document.querySelector('.modal');
// searchView.getQuery();
// model.loadFIlm("reacher");
// console.log(model.state);
var swiper = new Swiper('.home', {
  spaceBetween: 5,
  loop: true,
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
window.addEventListener('scroll', function () {});
const controlPreview = async function () {
  await model.stateFilm();

  await previewView.render(model.state.preview);
  await openingWeekView.render(model.state.openingWeek);
  await upcomingView.render(model.state.upcoming);
  console.log(await model.state.preview);
};

const controlSearch = async function () {
  const query = searchView.getQuery();
  if (!query) return;
  await model.loadFIlm(query);
  // const res = await model.state.search.results;
  //   model.state.search.results.forEach(el => {
  //     return el;
  //   })
  // );
  resultsView.render(model.state.search.results);
  // .forEach(el => el);
  // console.log(model.state.search.results);

  document.querySelector('.overlay').classList.add('hidden');
  document.querySelector('.searchResults').classList.remove('hidden');
  // console.log(resultsView._renderFilm());

  // searchView.addSearchHandler(model.loadFIlm(searchView.getQuery()));
  resultsView.clickCard();
};
let card = []
const info = async function () {
  await controlPreview();
  card.push( document.querySelectorAll('.weekImg'))

  // document.getElementById('modal-details').innerHTML = `<h2>${title}</h2>`;
  console.log(card[0]);
  return card
  // console.log(card.class);
};

const watchFilm = async function(){
  await controlPreview()
  // filmView.render(window.location.href.link)
  // console.log( document.querySelector(".watchBtn"));
   setTimeout(() => {
  const watchBtns = document.querySelectorAll(".watchBtn")
  watchBtns.forEach(el => 
  console.log(el.dataset.id))

  if (!watchBtns.length) {
    console.warn("No watch buttons found!");
    return;
  }

  watchBtns.forEach(btn => 
    {
  // console.log(btn.dataset.id)
      btn.addEventListener("click", function(){
    console.log("heavenly");
    const movieId = btn.dataset.id
  // console.log( document.querySelector(".watchBtn"))
  window.location.href = `./watch.html?link=${movieId}`
  
})})}, 50);
}

watchFilm()

// previewView.clickCard(info);
searchView.addSearchHandler(controlSearch);
info();


console.log(card);
// const cards = [...card];
const openModal = function () {
  document.getElementById('movie-modal').classList.remove('hidden');
};
const controlSearchResults = async function () {
  await info()
  
  const cards = card[0];
  console.log(cards);

  previewView.clickCard(openModal, cards);
};
controlSearchResults()
// previewView.clickCard(info);

// window.addEventListener('load',);
window.addEventListener('pageshow', event =>
  event.persisted === false ? controlSearch() : console.log(event)
);

const navbarElements = document.querySelectorAll('.nav');
navbarElements.forEach(el =>
  el.addEventListener('click', function (e) {
    // e.preventDefault();
    // document.
    document.querySelector('.overlay').classList.remove('hidden');
    document.querySelector('.searchResults').classList.add('hidden');

    // searchView.addSearchHandler(controlSearch);
  })
);

// document.addEventListener('DOMContentLoaded', function (e) {
//   card.forEach(c =>
//     c.addEventListener('click', function () {
//       console.log('loop');
//       // console.log(card);
//     })
//   );
//   // e.preventDefault();
// });
// document.addEventListener('DOMContentLoaded', function () {
//   console.log('reed');
//   document.querySelectorAll('.country__img').forEach(card => {
//     card.addEventListener('click', function () {
//       // Example: show movie title in modal
//       console.log('reed');
//       const title = card.querySelector('.country__img').alt;
//       document.getElementById('modal-details').innerHTML = `<h2>${title}</h2>`;
//       document.getElementById('movie-modal').classList.remove('hidden');
//       console.log(card.class);
//     });
//   });

//   document.querySelector('.close-modal').onclick = function () {
//     document.getElementById('movie-modal').classList.add('hidden');
//   };


// });
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// document.window.addEventListener('hashchange', function () {});
const params = new URLSearchParams(window.location.search);
menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};
// const init = function () {};

// ini / t();
