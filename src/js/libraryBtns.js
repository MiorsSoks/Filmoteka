


function getMovieByIdForLibrary(id) {
    return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=${langs}`)
      .then(r => r.json())
      .then(({ ...results }) => {
        results.release_date = results.release_date ? this.getCuttedDate(results.release_date) : '';
        (results.title = results.title ? this.getCuttedName(results.title) : ''),
          (results.genres = results.genres ? this.getGenreNameForLibrary(results.genres) : []);
        return results;
      });
  }