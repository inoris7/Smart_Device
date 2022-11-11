const anchor = document.querySelector('#feedback-section');
const consultButton = document.querySelector('.main-block__consult-button');

if (anchor && consultButton) {
  const setSmoothScroll = () => {

    anchor.scrollIntoView({
      behavior: 'smooth',
      alignToTop: true,
      block: 'start',
    });
  };

  consultButton.addEventListener('click', setSmoothScroll);
}
