const savedGenres = localStorage.getItem('allGenres');
const arrayOfAllGenres = JSON.parse(savedGenres);


export function changeGenresIdsToNames(movieGenresIds) {
   for (let i = 0; i < movieGenresIds.length; i++) {
    console.log(movieGenresIds);
    arrayOfAllGenres.forEach(objectGenre => {
      if (movieGenresIds[i] === objectGenre.id) {
        movieGenresIds[i] = objectGenre.name;
      }
    });
  }
}
