// import mainView from "./mainView.js";

class filmView{
    _data;
    _parentElement = document.querySelector("#iframe_test")
    render(data, render = true) {
    // if(!data)
    this._data = data;
    const markup = this._generateMarkup();
    // const response = [];
    // response.push(this._data);

    if (!render) return markup;

    
    //   this._clear();

      return this._parentElement.insertAdjacentHTML('afterbegin', markup);
    ;
  }
    _generateMarkup(){
        return `<iframe
        class="container"
        src="https://www.2embed.stream/embed/movie/${this._data}"
       
        frameborder="0" allowfullscreen
      ></iframe>`
    }
}

export default new filmView()