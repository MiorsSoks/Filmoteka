import axios from 'axios';
import { filmList } from './create_markup';
import { renderCollection } from './create_render_collection';

const refs = {
    watchedBtn: document.querySelector('.watched'),
    queueBtn: document.querySelector('.queue'),
    tuiPagination: document.querySelector('.tui-pagination'),
    library: document.querySelector('.header-link__library'),
    paginationContainer:  document.getElementById('pagination'),
    cardsContainerRef: document.querySelector('.gallery-container'),
}

refs.library.addEventListener('click', onLibraryClick);
refs.queueBtn.addEventListener('click', onQueueBtnClick);
refs.watchedBtn.addEventListener('click', onWatchedBtnClick);


let queueList = [];
let watchedList = [];

function onLibraryClick() {
  e.preventDefault();
  onWatchedBtnClick();
}

export function onQueueBtnClick() {
  refs.queueBtn.classList.add('header-btn--curren');
  refs.watchedBtn.classList.remove('header-btn--curren');
  refs.paginationContainer.classList.add('is-hidden');
  refs.cardsContainerRef.innerHTML = '';
  getQueueList().forEach(movie => {
    getMovieByIdForLibrary(movie)
      .then(renderListCard);
  });
}

export function onWatchedBtnClick() {
  refs.watchedBtn.classList.add('header-btn--curren');
  refs.queueBtn.classList.remove('header-btn--curren');
  refs.cardsContainerRef.innerHTML = '';
  getWatchedList().forEach(movie => {
    getMovieByIdForLibrary(movie)
      .then(renderListCard);
  });
}

function getQueueList() {
    if (!(localStorage.getItem('queueList')) || JSON.parse(localStorage.getItem('queueList')).length === 0 ) {
      console.log('empty');
      return [];
    } else {
      return queueList = JSON.parse(localStorage.getItem('queueList'));
    }
}

function getWatchedList() {
    if (!(localStorage.getItem('watchedList')) || JSON.parse(localStorage.getItem('watchedList')).length === 0 ) {
      console.log('empty');
      return [];
    } else {
      return watchedList = JSON.parse(localStorage.getItem('watchedList'));
    }
}


function renderListCard(data) {
    filmList.innerHTML = '';
    const markup = renderCollection(data);
    filmList.insertAdjacentHTML('afterbegin', markup);  // очищает страницу и создает новую страницу
}

const API_KEY = '3b94c1b54af7d429587ecf26a37007c0';

async function getMovieByIdForLibrary(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}