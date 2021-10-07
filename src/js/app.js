import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

    const ul = document.querySelector("ul");

      // eslint-disable-next-line no-undef
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')//the limit does NOT work
        .then(response => response.json().then(a => {
            a.results.forEach(pokemon => {
                let li = document.createElement('li');
                li.appendChild(document.createTextNode(pokemon.name));
                ul.appendChild(li);
            })
        }));
});
