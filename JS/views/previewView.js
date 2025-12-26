import mainView from './mainView.js';

class Preview extends mainView {
  _data;
  _parentElement = document.querySelector('.swiper-wrapper');
  _card = document.querySelector('.weekImg');
  _modal = document.querySelector('.modal');
  _generateMarkup() {
    // return document.querySelectorAll('.swiper-slide').map((node, count) => {
    //   return this._data.map((el, numb) => {
    //     if (numb === count)
    //       `<img class = "previewImg" src = "https://image.tmdb.org/t/p/original${el.poster_path}"/>`;
    //   });
    // });

    return this._data.map(
      el =>
        `<div class="swiper-slide slide container">
          <div class="home-text">
            <img class = "previewImg" src = "https://image.tmdb.org/t/p/original${el.poster_path}.jpg"/>
             
<button class="button watchBtn" data-id= ${el.id}>watch</button>

       </div>
     </div>`
    ).join("");
  }
  clickCard(handler, cards) {
    cards.forEach(img =>
      img.addEventListener('click', function (e) {
        // e.preventDefault();
        console.log('loop');
        // this._modal.classList.remove('hidden');
        handler();
      })
    );
  }
}

export default new Preview();
