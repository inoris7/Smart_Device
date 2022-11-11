const modalOpenButton = document.querySelector('.main-header__call-button');
const modalWindow = document.querySelector('.main-modal__container');
const modalCloseButton = document.querySelector('.main-modal__close-button');
const nameField = document.querySelector('#modal-name-field');

const isEscapeKey = (evt) => (evt.key === 'Escape');

if (modalOpenButton && modalWindow && modalCloseButton && nameField) {
  const onModalEscButtonKeydown = (evt) => {

    if (isEscapeKey(evt)) {
      evt.preventDefault();
      modalWindow.classList.add('main-modal__container--closed');
    }
  };

  modalOpenButton.addEventListener('click', () => {
    modalWindow.classList.remove('main-modal__container--closed');
    nameField.focus();
  });

  modalCloseButton.addEventListener('click', () => {
    modalWindow.classList.add('main-modal__container--closed');
  });

  document.addEventListener('keydown', onModalEscButtonKeydown);
}
