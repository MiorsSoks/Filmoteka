import { renderModalFilm } from './markup-modal';
import { fetchFilmInfo } from './bring_film_info';
import { getQueueList, getWatchedList } from './watched';
import { renderCollection } from './create_render_collection';
import Notiflix from 'notiflix';

(() => {
  const refs = {
    openModalBtn: document.querySelector('.list.gallery-container'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    back: document.querySelector('.backdrop'),
    m: document.querySelector('.container-wind'),
    galleryLibraryList: document.querySelector('.library-container'),
  };

  refs.openModalBtn.addEventListener('click', onOpenModalClick);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.m.addEventListener('click', e => {
    e.stopPropagation(), e.stopImediatePropagation;
  });

  refs.back.addEventListener('click', toggleModal);

  let id = '';
  function onOpenModalClick(event) {
    event.preventDefault();

    if (event.target.parentNode.classList.contains('container')) {
      return;
    }
    toggleModal();
    id = event.path.find(item => item.tagName === 'A').querySelector('img').id;
    fetchFilmInfo(id).then(data => {
      renderModalFilm(data);
      const watched = document.querySelectorAll('.add-to-watched');
      const queue = document.querySelectorAll('.add-to-queue');
      for (let i = 0; i < watched.length; i++) {
        watched[i].addEventListener('click', onWatchedBtnClick);
        queue[i].addEventListener('click', onQueueBtnClik);
      }
    });
  }

  function onWatchedBtnClick(e) {
    const filmInfo = getFilmInfo(e);
    const id = e.target.dataset.id;
    const key = { [id]: { ...filmInfo } };
    const watchedList = getWatchedList();

    if (watchedList.some(item => item[id])) {
      const newwatchedList = watchedList.filter(item => !item[id]);
      const parsedKey = JSON.stringify(newwatchedList);
      localStorage.setItem('watchedList', parsedKey);
      e.target.innerText = 'add to watched';
      Notiflix.Notify.success(`??? The movie has been removed from the watched list`);
      if (refs.galleryLibraryList !== null) {
        const newArrayOfMovies = JSON.parse(parsedKey);
        const normalObjects = newArrayOfMovies.flatMap(item => Object.values(item));
        refs.galleryLibraryList.innerHTML = '';
        if (normalObjects.length === 0) {
          refs.galleryLibraryList.innerHTML = `<li class='library-emty'>There are no added films yet.</li>`;
          return;
        }
        renderCollection(normalObjects);
      }
    } else {
      const parsedKey = JSON.stringify([...watchedList, key]);
      localStorage.setItem('watchedList', parsedKey);
      Notiflix.Notify.success(`???  DONE! The movie has been added to the watched list`);
      e.target.innerText = 'Remove watched';
    }
  }

  function onQueueBtnClik(e) {
    const filmInfo = getFilmInfo(e);
    const id = e.target.dataset.id;
    const key = { [id]: { ...filmInfo } };
    const queueList = getQueueList();

    if (queueList.some(item => item[id])) {
      const newQueueList = queueList.filter(item => !item[id]);
      const parsedKey = JSON.stringify(newQueueList);
      localStorage.setItem('queueList', parsedKey);
      Notiflix.Notify.success(`??? The movie has been removed from the queue list`);
      e.target.innerText = 'add to queue';
      if (refs.galleryLibraryList !== null) {
        const newArrayOfMovies = JSON.parse(parsedKey);
        const normalObjects = newArrayOfMovies.flatMap(item => Object.values(item));
        refs.galleryLibraryList.innerHTML = '';
        if (normalObjects.length === 0) {
          refs.galleryLibraryList.innerHTML = `<li class='library-emty'>There are no added films yet.</li>`;
          return;
        }
        renderCollection(normalObjects);
      }
    } else {
      const parsedKey = JSON.stringify([...queueList, key]);
      localStorage.setItem('queueList', parsedKey);
      Notiflix.Notify.success(`??? DONE! The movie has been added to the queue list`);
      e.target.innerText = 'Remove queue';
    }
  }

  function getFilmInfo(e) {
    const children = e.target.parentNode.parentNode.children;
    const date = e.target.parentNode.parentNode.dataset.date;
    const genre = e.target.parentNode.parentNode.dataset.genre.split(',');
    const title = children[0].innerText;
    const vote = children[1].querySelector('.list_01').innerText;
    const picture = e.target.parentNode.parentNode.parentNode.querySelector('.image_window').src;
    return {
      title,
      genre_ids: genre,
      vote_average: vote,
      poster_path: picture,
      id,
      release_date: date,
    };
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      refs.modal.classList.add('is-hidden');
    }
  });
})();

Notiflix.Notify.init({
  position: 'right-bottom',
});
