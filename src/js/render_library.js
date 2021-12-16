import { getQueueList, getWatchedList } from './watched';
import { renderCollection } from './create_render_collection';

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

  if (movies.length === 0) {
    galleryList.innerHTML = `<li class='library-emty'>There are no added films yet.</li>`;
    return;
  }

  const changeMovies = movies.flatMap(item => Object.values(item));
  renderCollection(changeMovies);
}
