const toggleButton = document.querySelector('.company-info__toggle-button');
const infoItems = document.querySelectorAll('.company-info__description-item');

if (toggleButton && infoItems) {
  infoItems[infoItems.length - 1].classList.add('company-info__description-item--closed');
  toggleButton.textContent = 'Подробнее';

  const setVisible = () => {
    infoItems[infoItems.length - 1].classList.toggle('company-info__description-item--closed');

    if (infoItems[infoItems.length - 1].classList.contains('company-info__description-item--closed')) {
      toggleButton.textContent = 'Подробнее';
    } else {
      toggleButton.textContent = 'Свернуть';
    }
  };

  toggleButton.addEventListener('click', setVisible);
}
