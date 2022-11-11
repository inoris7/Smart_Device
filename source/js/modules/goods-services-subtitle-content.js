const subtitle = document.querySelector('.goods-services__subtitle');

if (subtitle) {
  const checkMediaQuery = () => {
    if (window.innerWidth >= 768) {
      subtitle.innerHTML = 'Smart Device предлагает следующие товары и услуги';
    } else {
      subtitle.innerHTML = 'Товары и услуги<br> Smart Device';
    }
  };

  window.addEventListener('resize', checkMediaQuery);
}
