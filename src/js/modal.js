import { renderModalFilm } from './markup-modal';
import { fetchFilmInfo } from './bring_film_info';
(() => {
  const refs = {
    openModalBtn: document.querySelector('.list.gallery-container'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    back: document.querySelector('.backdrop'),
    m: document.querySelector('.container-wind'),
  };


  refs.openModalBtn.addEventListener('click', onOpenModalClick);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.m.addEventListener('click', e => {
    e.stopPropagation(), e.stopImediatePropagation;
  });

  refs.back.addEventListener('click', toggleModal);

  function onOpenModalClick(event) {
    event.preventDefault();
    if (event.target.parentNode.classList.contains('container')) {
      return;
    }
    toggleModal();
    const id = event.path.find(item => item.tagName === 'A').querySelector('img').id;
    fetchFilmInfo(id).then(data => {
      renderModalFilm(data);
    });
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      refs.modal.classList.add('is-hidden');
    }
  });

  let queueList = [];
  let watchedList = [];

  function checkQueueBtn(btn, id) {
    if (!localStorage.getItem('queueList')) return;
    let queueList = JSON.parse(localStorage.getItem('queueList'));

  }
  function checkWatchedBtn(btn, id) {
    if (!localStorage.getItem('watchedList')) return;
    let watchedList = JSON.parse(localStorage.getItem('watchedList'));
  }
})();
