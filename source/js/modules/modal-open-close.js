const modalOpenButton = document.querySelector('.main-header__call-button');
const modalWindow = document.querySelector('.main-modal__container');
const modalCloseButton = document.querySelector('.main-modal__close-button');
const nameField = document.querySelector('#modal-name-field');
const body = document.querySelector('body');
const mainModal = document.querySelector('.main-modal');


const isEscapeKey = (evt) => (evt.key === 'Escape');
const setCloseModal = () => {
  modalWindow.classList.add('main-modal__container--closed');
  body.classList.remove('main-modal--open');
};
const setOpenModal = () => {
  modalWindow.classList.remove('main-modal__container--closed');
  body.classList.add('main-modal--open');
};

if (modalOpenButton && modalWindow && modalCloseButton && nameField) {
  const onModalEscButtonKeydown = (evt) => {

    if (isEscapeKey(evt)) {
      evt.preventDefault();
      setCloseModal();
    }
  };

  modalOpenButton.addEventListener('click', () => {
    setOpenModal();
    nameField.focus();
  });

  modalCloseButton.addEventListener('click', setCloseModal);

  modalWindow.addEventListener('click', (evt) => {
    if (evt.target.className === 'main-modal__container') {
      evt.stopPropagation();
      setCloseModal();
    }
  });

  document.addEventListener('keydown', onModalEscButtonKeydown);

  mainModal.addEventListener('transitionend', () => {
    nameField.focus();
  });
}
