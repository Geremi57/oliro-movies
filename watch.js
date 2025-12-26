import filmView from "./JS/views/filmView.js";


console.log(window.location.href.link);

const watchfilm = function() {
    const params = new URLSearchParams(window.location.search)
    const movieId = params.get('link')
    console.log(movieId);
filmView.render(movieId)
}

watchfilm()