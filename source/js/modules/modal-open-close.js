const modalOpenButton = document.querySelector('.main-header__call-button');
const modalWindow = document.querySelector('.main-modal__container');
const modalCloseButton = document.querySelector('.main-modal__close-button');

const isEscapeKey = (evt) => (evt.key === 'Escape');

const onModalEscButtonKeydown = (evt) => {

  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modalWindow.classList.add('main-modal__container--closed');
  }
};

modalOpenButton.addEventListener('click', () => {
  modalWindow.classList.remove('main-modal__container--closed');
});

modalCloseButton.addEventListener('click', () => {
  modalWindow.classList.add('main-modal__container--closed');
});

document.addEventListener('keydown', onModalEscButtonKeydown);
