const consultButton = document.querySelector('.main-block__consult-button');

const checkMediaQuery = () => {
  if (window.innerWidth >= 768) {
    consultButton.textContent = 'Получить бесплатную консультацию';
  } else {
    consultButton.textContent = 'бесплатная консультация';
  }
};

window.addEventListener('resize', checkMediaQuery);
