import filmView from "./JS/views/filmView.js";


console.log(window.location.href.link);

const watchfilm = function() {
filmView.render(window.location.href.link)
}

watchfilm()