import { renderModalFilm } from './markup-modal';
import { fetchFilmInfo } from './bring_film_info';
import { getQueueList, getWatchedList } from './watched';

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

    console.log(refs.watchedBtn);
    console.log(refs.queueBtn);
    toggleModal();
    id = event.path.find(item => item.tagName === 'A').querySelector('img').id;
    console.log('id', id);
    fetchFilmInfo(id).then(data => {
      console.log('data', data.id);
      renderModalFilm(data);
      const watched = document.querySelectorAll('.add-to-watched');
      console.log(watched);
      const queue = document.querySelectorAll('.add-to-queue');
      console.log(queue);
      // queue.addEventListener('click', onQueueBtnClik);
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
    } else {
      const parsedKey = JSON.stringify([...watchedList, key]);
      localStorage.setItem('watchedList', parsedKey);
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
      e.target.innerText = 'add to queue';
    } else {
      const parsedKey = JSON.stringify([...queueList, key]);
      localStorage.setItem('queueList', parsedKey);
      e.target.innerText = 'Remove queue';
    }
  }

  //получаем свойства обьекта

  function getFilmInfo(e) {
    const children = e.target.parentNode.parentNode.children;
    const title = children[0].innerText;
    const genre = children[1].querySelector('.list_04').innerText;
    const vote = children[1].querySelector('.list_01').innerText;
    const picture = e.target.parentNode.parentNode.parentNode.querySelector('.image_window').src;
    return {
      title,
      genre,
      vote,
      picture,
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

  function checkQueueBtn(btn, id) {
    // if (!localStorage.getItem('queueList')) return;
    let queueList = JSON.parse(localStorage.getItem('queueList'));
  }
  function checkWatchedBtn(btn, id) {
    if (!localStorage.getItem('watchedList')) return;
    let watchedList = JSON.parse(localStorage.getItem('watchedList'));
  }
})();
