import Inputmask from 'inputmask';

const phoneFields = document.querySelectorAll('input[type="tel"]');

if (phoneFields) {
  const im = new Inputmask('+7(999)-999-99-99');

  phoneFields.forEach((el) => {
    im.mask(el);
  });
}
