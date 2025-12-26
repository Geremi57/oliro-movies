import mainView from './mainView.js';

class ResultsView extends mainView {
  _data;
  _card = document.querySelector('.country-img');
  _modal = document.querySelector('.modal');
  _parentElement = document.querySelector('.searchResults');
  // render(data) {
  //   this._data = data;
  //   const markUp = this._generateMarkup;
  // }
  _generateMarkup() {
    // this._data.forEach(el => console.log(el));
    return this._data
      .map(
        el =>
          `<article class="country">
  <img class="country__img" src="https://image.tmdb.org/t/p/original${el.posterPath}" alt = ${el.title}/>
  <div class="countries">
  <a class = "watch "
    href = "https://api.themoviedb.org/3/movie/${el.id}/watch/providers">
  </a>
  <a
  href="https://www.2embed.stream/embed/movie/${el.id}">
        <i class="watch bx bx-play-circle"></i>
  </a>
  </div>
  </article>`
      )
      .join('');
  }

  _renderFilm() {
    return this._data.map(result => View.render(result, false)).join('');
  }
  
  clickCard() {
    document.addEventListener('DOMContentLoaded', function () {
      console.log(this._data);
      this._data.forEach(card => {
        card.addEventListener('click', function (e) {
          // e.preventDefault();
          console.log('loop');
          this._modal.classList.remove('hidden');
        });
      });
    });
  }
  // <div class="search"></div>
}

export default new ResultsView();
