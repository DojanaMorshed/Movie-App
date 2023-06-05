const movieManager = require('./movieManager');
const userInteraction = require('./userInteraction');

async function main() {
  let movies = await movieManager.loadMovies();
  let exit = false;
  while (!exit) {
    let choice = await userInteraction.showMenu();
    switch (choice) {
      case '1':
        await userInteraction.showMovies(movies);
        break;
      case '2':
        let newMovie = await userInteraction.getNewMovie();
        movies = await movieManager.addMovie(movies, newMovie);
        break;
      case '3':
        let movieToUpdate = await userInteraction.getMovieToUpdate(movies);
        let updatedMovie = await userInteraction.getUpdatedMovie(movieToUpdate);
        movies = await movieManager.updateMovie(movies, movieToUpdate, updatedMovie);
        break;
      case '4':
        let movieToDelete = await userInteraction.getMovieToDelete(movies);
        movies = await movieManager.deleteMovie(movies, movieToDelete);
        break;
      case '5':
        let searchType = await userInteraction.getSearchType();
        let searchTerm = await userInteraction.getSearchTerm();
        let filteredMovies = await movieManager.filterMovies(movies, searchType, searchTerm);
        await userInteraction.showMovies(filteredMovies);
        break;
      case '6':
        let apiMovies = await movieManager.fetchMoviesFromAPI();
        movies = await movieManager.addMovies(movies, apiMovies);
        break;
      case '7':
        exit = true;
        break;
      default:
        console.log('Invalid choice. Please try again.');
    }
  }
  await movieManager.saveMovies(movies);
  console.log('Goodbye!');
}

main();
