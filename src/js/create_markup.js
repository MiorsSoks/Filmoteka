const filmList = document.querySelector('.gallery-container');

export function renderMarkup(movies) {
  const markup = movies.map(movie => createMarkup(movie)).join('');
  filmList.insertAdjacentHTML('beforeend', markup);
}

function createMarkup({ poster_path, title, genre_ids, release_date, popularity }) {
  return `<li class="gallery-container__item">
    <div class="gallery-card">
        <a href="" class="link gallery-art">
            <picture>
                <source media="(min-width: 1024px)"
                    srcset="${poster_path} 1x, ${poster_path} 2x">
                <source media="(min-width: 768px)"
                    srcset="${poster_path} 1x, ${poster_path} 2x">
                <source media="(min-width: 320px)"
                    srcset="${poster_path} 1x, ${poster_path} 2x">
    
                <img src="${poster_path}" alt="Poster of movie">
            </picture>
    
        </a>
        <div class="film-description">
            <h2 class="film-name">${title}</h2>
            <div class="film-info">
                <p class="genres">${genre_ids}</p>
                <p class="year">${release_date}</p>
                <p class="rating">${popularity}</p>
            </div>
    
        </div>
    </div>
</li>`;
}
