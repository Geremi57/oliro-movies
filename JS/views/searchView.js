class SearchView {
  _parentEl = document.querySelector('.searchBox');
  _card = document.querySelector('.country-img');
  _modal = document.querySelector('.modal');
  getQuery() {
    const query = this._parentEl.querySelector('.search_input').value;
    console.log(query);
    const params = new URLSearchParams(window.location.search);
    const query2 = params.get('q');
    console.log(query2);
    return query;
  }
  addSearchHandler(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      console.log(window.screen);
      window.scrollTo(0, 0);
      // console.log(document.querySelector(".overlay").classList);
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
