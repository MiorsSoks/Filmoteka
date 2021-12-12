import { renderModalFilm } from './markup-modal';
import { fetchFilmInfo } from './bring_film_info';
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    back: document.querySelector('.backdrop'),
    m: document.querySelector('.container-wind'),
  };
  // console.log(refs);
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.m.addEventListener('click', e => {
    e.stopPropagation(), e.stopImediatePropagation;
  });

  refs.back.addEventListener('click', toggleModal);

  function toggleModal(event) {
    event.preventDefault();
    fetchFilmInfo(event.target.id).then(data => {
      renderModalFilm(data);
    });
    refs.modal.classList.toggle('is-hidden');
  }

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      refs.modal.classList.add('is-hidden');
    }
  });
})();
