import { getGenresNames } from './getGenresNames';
const filmList = document.querySelector('.gallery-container');

const BASE_IMG_URL = 'https://image.tmdb.org/t/p';
const SIZE_IMG = '/w500';

export function renderMarkup(movies) {
  const markup = movies.map(movie => createMarkup(movie)).join('');
  filmList.insertAdjacentHTML('beforeend', markup);
}

function createMarkup({ poster_path, title, genre_ids, release_date, popularity }) {
  return `<li class="gallery-container__item">
        <a href="" class="link gallery-art">
            <div class="film-img">
                            <picture>
                                <source media="(min-width: 1024px)"
                                    srcset="${BASE_IMG_URL + SIZE_IMG + poster_path} 1x, ${
    BASE_IMG_URL + SIZE_IMG + poster_path
  } 2x">
                                <source media="(min-width: 768px)"
                                    srcset="${BASE_IMG_URL + SIZE_IMG + poster_path} 1x, ${
    BASE_IMG_URL + SIZE_IMG + poster_path
  } 2x">
                                <source media="(min-width: 320px)"
                                    srcset="${BASE_IMG_URL + SIZE_IMG + poster_path} 1x, ${
    BASE_IMG_URL + SIZE_IMG + poster_path
  } 2x">
                            
                                <img class="poster" src="${
                                  BASE_IMG_URL + SIZE_IMG + poster_path
                                }" alt="Poster of movie">
                            </picture>
            </div>
 <div class="film-description">
      <h2 class="film-name">${title}</h2>
      <div class="film-info">
          <p class="genres">${genre_ids}</p>
          <p class="year">${release_date.slice(0, 4)}</p>
          <p class="rating">${popularity.toFixed(1)}</p>
      </div>
    
        </div>
        </a>
</li>`;
}
