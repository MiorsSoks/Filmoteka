const filmList = document.querySelector('.gallery-container');
const BASE_IMG_URL = 'https://image.tmdb.org/t/p';
const SIZE_IMG = '/w500';

export function renderCollection(data) {
  const markup = data.results
  .map(movie => {
       return `<li class="gallery-container__item">
    <div class="gallery-card">
        <a href="" class="link gallery-art">
            <picture>
                <source media="(min-width: 1024px)"
                    srcset="${BASE_IMG_URL + SIZE_IMG + movie.poster_path} 1x, ${BASE_IMG_URL + SIZE_IMG + movie.poster_path} 2x">
                <source media="(min-width: 768px)"
                    srcset="${BASE_IMG_URL + SIZE_IMG + movie.poster_path} 1x, ${BASE_IMG_URL + SIZE_IMG + movie.poster_path} 2x">
                <source media="(min-width: 320px)"
                    srcset="${BASE_IMG_URL + SIZE_IMG + movie.poster_path} 1x, ${BASE_IMG_URL + SIZE_IMG + movie.poster_path} 2x">
    
                <img src="${BASE_IMG_URL + SIZE_IMG + movie.poster_path}">
            </picture>    
        </a>
        <div class="film-description">
            <h2 class="film-name">${movie.title}</h2>
            <div class="film-info">
                <p class="genres">${movie.genre_ids}</p>
                <p class="year">${movie.release_date}</p>
                <p class="rating">${movie.popularity}</p>
            </div>    
        </div>
    </div>
</li>`
}
)

.join('');


return filmList.innerHTML = markup;
};

