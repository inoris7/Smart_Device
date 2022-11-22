import focusTrap from 'focus-trap-js';

const modalWindow = document.querySelector('.main-modal');

document.addEventListener('keydown', (evt) => {
  focusTrap(evt, modalWindow);
});
