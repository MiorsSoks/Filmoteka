const savedGenres = localStorage.getItem('allGenres');
const arrayOfAllGenres = JSON.parse(savedGenres);
console.log(arrayOfAllGenres);

export function changeGenresIdsToNames(movieIds) {
  for (let i = 0; i < movieIds.length; i++) {
    arrayOfAllGenres.forEach(objectGenre => {
      if (movieIds[i] === objectGenre.id) {
        movieIds[i] = objectGenre.name;
      }
    });
  }
}
