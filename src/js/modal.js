import { renderModalFilm } from './markup-modal';
import { fetchFilmInfo } from './bring_film_info';
(() => {
  const refs = {
    openModalBtn: document.querySelector('.list.gallery-container'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    back: document.querySelector('.backdrop'),
    m: document.querySelector('.container-wind'),
    watchedBtn: document.querySelector('.add-to-watched'),
    queueBtn: document.querySelector('.add-to-queue'),
  };

  // let watched;
  // console.log(watched);
  refs.openModalBtn.addEventListener('click', onOpenModalClick);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.m.addEventListener('click', e => {
    e.stopPropagation(), e.stopImediatePropagation;
  });

  refs.back.addEventListener('click', toggleModal);

  let id = "";
  function onOpenModalClick(event) {
    event.preventDefault();

    if (event.target.parentNode.classList.contains('container')) {
      return;
    }

    console.log(refs.watchedBtn);
    console.log(refs.queueBtn);
    toggleModal();
    id = event.path.find(item => item.tagName === 'A').querySelector('img').id;
    console.log("id", id)
    fetchFilmInfo(id).then(data => {
      console.log("data", data.id)
      renderModalFilm(data);
      const watched = document.querySelectorAll('.add-to-watched');
      console.log(watched);
      const queue = document.querySelectorAll('.add-to-queue');
      console.log(queue);
      // queue.addEventListener('click', onQueueBtnClik);
      for (let i = 0; i < watched.length; i++) {        
        watched[i].addEventListener('click', onWatchedBtnClick);
        queue[i].addEventListener('click', onQueueBtnClik)
      }
    });
  }

  let queueList = [];
  let watchedList = [];

  function onWatchedBtnClick() {
    console.log('Hello world');
    watchedList.push(id)
  }
  function onQueueBtnClik() {
    console.log('Its queue');
    queueList.push(id)
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  console.log("queue", queueList)
  console.log("watch", watchedList)

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      refs.modal.classList.add('is-hidden');
    }
  });



  function checkQueueBtn(btn, id) {
    // if (!localStorage.getItem('queueList')) return;
    let queueList = JSON.parse(localStorage.getItem('queueList'));
  }
  function checkWatchedBtn(btn, id) {
    if (!localStorage.getItem('watchedList')) return;
    let watchedList = JSON.parse(localStorage.getItem('watchedList'));
  }
})();
