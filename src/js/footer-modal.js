(() => {
  const refs = {
    openModal: document.querySelector('[data-footer-modal-open]'),
    closeModalBtn: document.querySelector('[data-footer-modal-close]'),
    modal: document.querySelector('[data-footer-modal]'),
    back: document.querySelector('.footer-backdrop'),
    m:document.querySelector('.footer-modal'),
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