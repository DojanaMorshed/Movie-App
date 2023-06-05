const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function showMenu() {
    return new Promise(resolve => {
      console.log('1. Display Movie Catalog');
      console.log('2. Add New Movie');
      console.log('3. Update Movie Details');
      console.log('4. Delete Movie');
      console.log('5. Search and Filter');
      console.log('6. Fetch Movie Data');
      console.log('7. Exit');
      readline.question('Enter your choice: ', choice => {
        resolve(choice);
      });
    });
  }
  
  function showMovies(movies) {
    console.log('Movie Catalog:');
    movies.forEach(movie => {
      console.log(`Title: ${movie.title}, Director: ${movie.director}, Release Year: ${movie.releaseYear}, Genre: ${movie.genre}`);
    });
  }
  
  function getNewMovie() {
    return new Promise(resolve => {
      readline.question('Enter the title of the movie: ', title => {
        readline.question('Enter the director of the movie: ', director => {
          readline.question('Enter the release year of the movie: ', releaseYear => {
            readline.question('Enter the genre of the movie: ', genre => {
              let newMovie = {
                title,
                director,
                releaseYear,
                genre
              };
              resolve(newMovie);
            });
          });
        });
      });
    });
  }
  
  function getMovieToUpdate(movies) {
    return new Promise(resolve => {
      console.log('Select the movie to update:');
      movies.forEach((movie, index) => {
        console.log(`${index + 1}. ${movie.title}`);
      });
      readline.question('Enter your choice: ', choice => {
        let movieToUpdate = movies[choice - 1];
        resolve(movieToUpdate);
      });
    });
  }
  
  function getUpdatedMovie(movieToUpdate) {
    return new Promise(resolve => {
      console.log(`Updating ${movieToUpdate.title}:`);
      readline.question(`Enter the new title (${movieToUpdate.title}): `, title => {
        readline.question(`Enter the new director (${movieToUpdate.director}): `, director => {
          readline.question(`Enter the new release year (${movieToUpdate.releaseYear}): `, releaseYear => {
            readline.question(`Enter the new genre (${movieToUpdate.genre}): `, genre => {
              let updatedMovie = {
                title: title || movieToUpdate.title,
                director: director || movieToUpdate.director,
                releaseYear: releaseYear || movieToUpdate.releaseYear,
                genre: genre || movieToUpdate.genre
              };
              resolve(updatedMovie);
            });
          });
        });
      });
    });
  }
  
  function getMovieToDelete(movies) {
    return new Promise(resolve => {
      console.log('Select the movie to delete:');
      movies.forEach((movie, index) => {
        console.log(`${index + 1}. ${movie.title}`);
      });
      readline.question('Enter your choice: ', choice => {
        let movieToDelete = movies[choice - 1];
        resolve(movieToDelete);
      });
    });
  }
  
  function getSearchType() {
    return new Promise(resolve => {
      console.log('Search by:');
      console.log('1. Title');
      console.log('2. Director');
      console.log('3. Genre');
      readline.question('Enter your choice: ', choice => {
        let searchType;
        switch (choice) {
          case '1':
            searchType = 'title';
            break;
          case '2':
            searchType = 'director';
            break;
          case '3':
            searchType = 'genre';
            break;
          default:
            console.log('Invalid choice. Please try again.');
        }
        resolve(searchType);
      });
    });
  }
  
  function getSearchTerm() {
    return new Promise(resolve => {
      readline.question('Enter the search term: ', searchTerm => {
        resolve(searchTerm);
      });
    });
  }
  
  module.exports = {
    showMenu,
    showMovies,
    getNewMovie,
    getMovieToUpdate,
    getUpdatedMovie,
    getMovieToDelete,
    getSearchType,
    getSearchTerm
  };
  