(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    m: document.querySelector('.container-wind'), 
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  
  refs.m.addEventListener('click', (e) => {
    e.stopPropagation(), e.stopImediatePropagation
  })

    function toggleModal(event) {
        event.preventDefault();
      refs.modal.classList.toggle('is-hidden');
       }
 
})();
