import mainView from './mainView.js';

class Upcoming extends mainView {
  _data;
  _parentElement = document.querySelector('.upcoming');

  _generateMarkup() {
    return this._data
      .map(
        el =>
          `<div class="swiper-slide box">
            <div class="box-img">
              <img src="https://image.tmdb.org/t/p/original${el.poster_path}" alt=${el.title}" />
            </div>
            <h3 class="coming"></h3>
          </div>`
      )
      .join('');
  }
}

export default new Upcoming();
