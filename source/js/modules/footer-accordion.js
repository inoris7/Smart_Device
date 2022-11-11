const accordion = document.querySelectorAll('.main-footer__accordion');
const panels = document.querySelectorAll('.main-footer__links-list');

if (accordion && panels) {
  const handelClick = (evt) => {
    const target = evt.target;
    target.classList.toggle('main-footer__accordion--closed');
    target.nextElementSibling.classList.toggle('main-footer__links-list--closed');

    panels.forEach((el) => {
      if (el !== target.nextElementSibling) {
        el.classList.add('main-footer__links-list--closed');
        el.previousElementSibling.classList.add('main-footer__accordion--closed');
      }
    });
  };

  accordion.forEach((el) => {
    el.classList.add('main-footer__accordion--closed');
    el.nextElementSibling.classList.add('main-footer__links-list--closed');
    el.addEventListener('click', handelClick);
  });
}
