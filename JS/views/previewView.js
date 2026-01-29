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
            <img class = "previewImg" src = "https://image.tmdb.org/t/p/original/${el.backdrop_path}.jpg"/>
             
<button class="button watchBtn" data-id= ${el.id}>watch</button>
<button class="buttoninfo button watchBtn">
    <svg fill="white" height="1.5em" class="svgIcon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg>
    <span class="tooltip">Info</span>
</button>
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
