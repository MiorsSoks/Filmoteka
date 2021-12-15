import { getQueueList, getWatchedList } from './watched';
import { renderMarkup } from './create_markup';

window.addEventListener('load', () => onBtnClick('watched'));

const galleryList = document.querySelector('.gallery-container');
const watchedBtn = document.querySelector('.header-btn.watched');
const QueueBtn = document.querySelector('.header-btn.header-btn__queue.queue');

QueueBtn.addEventListener('click', () => onBtnClick('queue'));
watchedBtn.addEventListener('click', () => onBtnClick('watched'));

function setActiveClass(type) {
  switch (type) {
    case 'watched':
      QueueBtn.classList.remove('active');
      if (watchedBtn.classList.contains('active')) {
        return;
      } else {
        watchedBtn.classList.add('active');
      }
      break;
    case 'queue':
      watchedBtn.classList.remove('active');
      if (QueueBtn.classList.contains('active')) {
        return;
      } else {
        QueueBtn.classList.add('active');
      }
      break;
  }
}

function resetGalleryList() {
  galleryList.innerHTML = '';
}

function onBtnClick(type) {
  resetGalleryList();
  setActiveClass(type);
  let movies = [];
  if (type === 'watched') {
    movies = getWatchedList();
  } else if (type === 'queue') {
    movies = getQueueList();
  }
  const changeMovies = movies.flatMap(item => Object.values(item));
  renderMarkup(changeMovies);
}
