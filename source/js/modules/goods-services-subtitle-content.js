const subtitle = document.querySelector('.goods-services__subtitle');
const cardSubtitle = document.querySelector('.goods-services__card-subtitle--second');

if (subtitle && cardSubtitle) {
  const checkMediaQuery = () => {
    if (window.innerWidth >= 768) {
      subtitle.innerHTML = 'Smart Device предлагает следующие товары и услуги';
    } else {
      subtitle.innerHTML = 'Товары и услуги<br> Smart Device';
    }
    if (window.innerWidth >= 1024) {
      cardSubtitle.innerHTML = 'Монтаж печатных<br> плат';
    } else {
      cardSubtitle.innerHTML = 'Монтаж<br> печатных плат';
    }
  };

  window.addEventListener('resize', checkMediaQuery);
}
