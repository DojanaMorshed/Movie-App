const fileHandler = require('./fileHandler');
const apiHandler = require('./apiHandler');

async function loadMovies() {
  try {
    let movies = await fileHandler.readJSONFile('movies.json');
    return movies;
  } catch (error) {
    console.log('Error loading movies:', error);
    return [];
  }
}

async function saveMovies(movies) {
  try {
    await fileHandler.writeJSONFile('movies.json', movies);
  } catch (error) {
    console.log('Error saving movies:', error);
  }
}

async function addMovie(movies, newMovie) {
  movies.push(newMovie);
  return movies;
}

async function updateMovie(movies, movieToUpdate, updatedMovie) {
  let index = movies.indexOf(movieToUpdate);
  if (index !== -1) {
    movies[index] = updatedMovie;
  }
  return movies;
}

async function deleteMovie(movies, movieToDelete) {
  let index = movies.indexOf(movieToDelete);
  if (index !== -1) {
    movies.splice(index, 1);
  }
  return movies;
}

async function filterMovies(movies, searchType, searchTerm) {
  let filteredMovies = movies.filter(movie => {
    return movie[searchType].toLowerCase().includes(searchTerm.toLowerCase());
  });
  return filteredMovies;
}

async function fetchMoviesFromAPI() {
  let apiMovies = await apiHandler.fetchMovies();
  return apiMovies;
}

async function addMovies(movies, newMovies) {
  movies.push(...newMovies);
  return movies;
}

module.exports = {
  loadMovies,
  saveMovies,
  addMovie,
  updateMovie,
  deleteMovie,
  filterMovies,
  fetchMoviesFromAPI,
  addMovies
};
