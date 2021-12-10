import { changeGenresIdsToNames } from './change_genres_ids';
const filmList = document.querySelector('.gallery-container');

const BASE_IMG_URL = 'https://image.tmdb.org/t/p';
const SIZE_IMG = '/w500';

export function renderCollection(movies) {
  const markup = movies.map(movie => createMarkupColl(movie)).join('');
  return (filmList.innerHTML = markup);
}

function createMarkupColl({
  poster_path,
  title,
  genre_ids,
  release_date,
  vote_average,
  first_air_date,
  name,
}) {
  changeGenresIdsToNames(genre_ids);
  return `<li class="gallery-container__item">
        <a href="" class="link gallery-art" data-modal-open>
            <div class="film-img">
                            <picture>
                                <source media="(min-width: 1024px)"
                                    srcset="${
                                      poster_path === null
                                        ? noPosterImg
                                        : BASE_IMG_URL + SIZE_IMG + poster_path
                                    } 1x, ${
    poster_path === null ? noPosterImg : BASE_IMG_URL + SIZE_IMG + poster_path
  } 2x">
                                <source media="(min-width: 768px)"
                                    srcset="${
                                      poster_path === null
                                        ? noPosterImg
                                        : BASE_IMG_URL + SIZE_IMG + poster_path
                                    } 1x, ${
    poster_path === null ? noPosterImg : BASE_IMG_URL + SIZE_IMG + poster_path
  } 2x">
                                <source media="(min-width: 320px)"
                                    srcset="${
                                      poster_path === null
                                        ? noPosterImg
                                        : BASE_IMG_URL + SIZE_IMG + poster_path
                                    } 1x, ${
    poster_path === null ? noPosterImg : BASE_IMG_URL + SIZE_IMG + poster_path
  } 2x">

                                <img class="poster" src="${
                                  poster_path === null
                                    ? noPosterImg
                                    : BASE_IMG_URL + SIZE_IMG + poster_path
                                }" alt="Poster of movie">
                            </picture>
            </div>
 <div class="film-description">
      <h2 class="film-name">${title ? title : name}</h2>
      <div class="film-info">
          <p class="genres">${
            genre_ids.length > 2 ? genre_ids.slice(0, 2) + `<span>,Other</span>` : genre_ids
          }</p>
          <p class="year">${
            release_date ? release_date.slice(0, 4) : first_air_date.slice(0, 4)
          }</p>
          <p class="rating">${vote_average}</p>
      </div>

        </div>
        </a>
</li>`;
}
{
 
}
