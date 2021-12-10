(() => {
  const refs = {
    openModal: document.querySelector('[data-team-modal-open]'),
    closeModalBtn: document.querySelector('[data-team-modal-close]'),
    modal: document.querySelector('[data-team-modal]'),
    back: document.querySelector('.team-backdrop'),
    m:document.querySelector('.team-modal'),
  };

  refs.openModal.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.m.addEventListener('click', (e) => {
    e.stopPropagation(), e.stopImediatePropagation
  })

  window.addEventListener('keydown', (e) => {
   if (e.key === 'Escape') {
      refs.modal.classList.add('is-hidden');
    }
  })

  refs.back.addEventListener('click',toggleModal)
  
  function toggleModal(event) {
    refs.modal.classList.toggle('is-hidden');
  }
})();