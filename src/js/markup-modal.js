// const backdrop = document.querySelector('.js-backdrop');
// const modalWind = document.querySelector('.container-wind');
// const modalWindElem = document.querySelector('ul.children');
const modalW = document.querySelector('.mw');

const BASE_IMG_URL = 'https://image.tmdb.org/t/p';
const SIZE_IMG = '/w500';
const noPosterImg = 'https://sd.keepcalms.com/i/sorry-no-picture-available-2.png';
// modalWindElem.setAttribute('data-modal-open');

export function renderModalFilm(movie) {
  const modalMarkup = createModalMarkup(movie);
  modalW.innerHTML = modalMarkup;
}

function createModalMarkup({
  title,
  popularity,
  original_title,
  vote_average,
  genres,
  poster_path,
  overview,
  vote_count,
}) {
  const genresOfMovie = genres.map(genre => {
    return genre.name;
  });

  return `
  <div class="container-wind">
    <div class="section_wind">
        <picture>
            <source media="(min-width: 1024px)" 
                srcset="${poster_path === null ? noPosterImg : BASE_IMG_URL + SIZE_IMG + poster_path
    }">

            <source media="(min-width: 768px)"
                srcset="${poster_path === null ? noPosterImg : BASE_IMG_URL + SIZE_IMG + poster_path
    }">

            <source media="(min-width: 10px)"
                srcset="${poster_path === null ? noPosterImg : BASE_IMG_URL + SIZE_IMG + poster_path
    }">

            <img src="${poster_path === null ? noPosterImg : BASE_IMG_URL + SIZE_IMG + poster_path
    }" class="image_window" alt="картинка з фільму" />
        </picture>
    </div>
    <div class="section_wind">
        <h1 class="modal_wind">"${title}"</h1>
        <div class="list_wind">
            <ul class="list wind_left">
                <li class="list_l">Vote / Votes</li>
                <li class="list_l">Popularity</li>
                <li class="list_l">Original Title</li>
                <li class="list_l">Genre</li>
            </ul>
            <ul class="list wind_right">
                <li class="list_r01">
                    <div class="list_r1">${vote_average}</div>
                    <div class="modal_slesh">&nbsp; / &nbsp;</div>${vote_count}
                </li>
                <li class="list_r01">"${popularity}"</li>
                <li class="list_02">"${original_title}"</li>
                <li class="list_02">"${genresOfMovie}"</li>
            </ul>
        </div>


        <h2 class="modal_about">About</h2>
        <p class="modal_tex">"${overview}"</p>
      <div class="mw">
        <button class="modal_btn_l modal_btn add-to-watched" type="submit">add to Watched</button>
        <button class="modal_btn_r modal_btn add-to-queue" type="submit">add to queue</button>
      </div>
    </div>
  </div>`;
}
