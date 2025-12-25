export default class mainView {
  _data;
  render(data, render = true) {
    // if(!data)
    this._data = data;
    const markup = this._generateMarkup();
    // const response = [];
    // response.push(this._data);

    if (!render) return markup;

    this._data.forEach(el => {
      this._clear();

      return this._parentElement.insertAdjacentHTML('afterbegin', markup);
    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }
}
