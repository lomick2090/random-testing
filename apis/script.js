const img = document.querySelector('img');
const search = document.getElementById('search');
const weird = document.getElementById('weird');
let searchValue = search.value;
let weirdValue = weird.value;

function searchGif(search, weird) {
    let searchURL = `https://api.giphy.com/v1/gifs/translate?api_key=t8JRu3bZqBfvr0A1uorQvyFWAkWt1t0B&s=${search}&weirdness=${weird}`;

    return fetch(searchURL, 
        {mode: 'cors'}
        )
        .then((response) => {
            return response.json();
        })
        .then ((response) => {
            return response.data.images.original.url
    })
}

function userSearch() {
    searchValue = search.value;
    weirdValue = weird.value;

    searchGif(searchValue, weirdValue)
        .then((response) => {
            img.src = response;
        });
}

function refreshSearch() {
    searchGif(searchValue, weirdValue)
    .then((response) => {
        img.src = response;
    });
}

searchGif('cats', 0)
    .then((response) => {
        img.src = response;
    });