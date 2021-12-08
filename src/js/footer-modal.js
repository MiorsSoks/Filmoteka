(() => {
  const refs = {
    openModal: document.querySelector('[data-footer-modal-open]'),
    closeModalBtn: document.querySelector('[data-footer-modal-close]'),
    modal: document.querySelector('[data-footer-modal]'),
  };

  refs.openModal.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();