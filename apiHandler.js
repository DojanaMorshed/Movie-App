const axios = require('axios');

async function fetchMovies() {
  let response = await axios.get(`http://www.omdbapi.com/?i=${movie.dataset.id}&apikey=fc1fef96`);
  let apiMovies = response.data.results.map(movie => {
    return {
      title: movie.title,
      director: '',
      releaseYear: movie.release_date.substring(0, 4),
      genre: movie.genre_ids.join(', ')
    };
  });
  return apiMovies;
}

module.exports = {
  fetchMovies
};
