import mainView from './mainView.js';

class OpeningWeek extends mainView {
  _data;
  _parentElement = document.querySelector('.movies-container');

  _generateMarkup() {
    // .join(' ')

    return this._data
      .map(
        el => `<div class="box-img weekImg">
  <img class="country__img" src="https://image.tmdb.org/t/p/original${el.poster_path}" alt = ${el.title}/>
  <div class = "countries>
 <a class = "watch "
    href = "https://api.themoviedb.org/3/movie/${el.id}/watch/providers">
  </a>
  <a
  href="https://vidsrc.xyz/embed/movie?tmdb=${el.id}">
        <i class="watch bx bx-play-circle"></i>
  </a>
  </div>

  </div>`
      )
      .join(' ');
  }
}

export default new OpeningWeek();
