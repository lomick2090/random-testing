const img = document.querySelector('img');

fetch('https://api.giphy.com/v1/gifs/translate?api_key=t8JRu3bZqBfvr0A1uorQvyFWAkWt1t0B&s=cats', 
    {mode: 'cors'}
    )
    .then((response) => {
        return response.json();
    })
    .then ((response) => {
        img.src = response.data.images.original.url
    });