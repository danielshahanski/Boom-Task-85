import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

    const ul = document.querySelector("ul");

  for (let i = 1; i <= 10; i++) {
      // eslint-disable-next-line no-undef
    fetch('https://pokeapi.co/api/v2/pokemon/'+i+'?limit=10')//the limit does NOT work
        .then(response => response.json())
        .then(json => {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(json.name));
            ul.appendChild(li);
        });
  }
});
