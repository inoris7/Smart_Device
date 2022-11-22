const paragraphs = document.querySelectorAll('.company-info__description-paragraph');

if (paragraphs) {
  const checkMediaQueryParagraphs = () => {
    if (window.innerWidth >= 320) {
      paragraphs[0].innerHTML = 'Мы поставляем электронные комплектующие, производим печатные платы и предоставляем мировые технологии с 1997 года. Выполняем срочные заказы <br>и пилотные образцы до 10 дней.';
      paragraphs[1].innerHTML = 'Наши поставщики - мировые производители электронных компонентов: OSRAM, CREE, HOLGLITRONIC, REFOND. Печатные платы и комплектующие Service Devices применяются <br>на предприятиях Российских Железных Дорог (РЖД), РоссАвтоПрома (ВАЗ, АвтоГАЗ), МинАтома, СпецМедТехники. Среди наших клиентов крупнейшие Производители светотехники России.';
      paragraphs[2].innerHTML = 'Smart Device - это команда профессионалов. Через нас прошло более 1 000 000 клиентов, 70% <br>из которых продолжают сотрудничество по сей день. <br>На данный момент насчитывается более 14 офисов по всей стране <br>и 20 городов присутствия.';
      paragraphs[3].innerHTML = 'Мы стремимся к постоянному развитию и повышению уровня качества продукции, производимой внутри компании. Использование инновационных технологий помогает экономить деньги <br>и время наших клиентов';
    }
    if (window.innerWidth >= 768) {
      paragraphs[0].innerHTML = 'Мы поставляем электронные комплектующие, производим печатные платы и предоставляем мировые технологии <br>с 1997 года. Выполняем срочные заказы и пилотные образцы до 10 дней.';
      paragraphs[1].innerHTML = 'Наши поставщики - мировые производители электронных компонентов: OSRAM, CREE, HOLGLITRONIC, REFOND. Печатные платы и комплектующие Service Devices применяются на предприятиях Российских Железных Дорог (РЖД), РоссАвтоПрома (ВАЗ, АвтоГАЗ), МинАтома, СпецМедТехники. Среди наших клиентов крупнейшие Производители светотехники России.';
      paragraphs[2].innerHTML = 'Smart Device - это команда профессионалов. Через нас прошло более 1 000 000 клиентов, 70% из которых продолжают сотрудничество по сей день. На данный момент насчитывается более 14 офисов по всей стране и 20 городов присутствия.';
      paragraphs[3].innerHTML = 'Мы стремимся к постоянному развитию и повышению уровня качества продукции, производимой внутри компании. Использование инновационных технологий помогает экономить деньги и время наших клиентов';
    }
    if (window.innerWidth >= 1024) {
      paragraphs[0].innerHTML = 'Мы поставляем электронные комплектующие, производим печатные платы и предоставляем мировые технологии с 1997 года. Выполняем срочные заказы и пилотные образцы до 10 дней.';
      paragraphs[2].innerHTML = 'Smart Device - это команда профессионалов. Через нас прошло более 1 000 000 клиентов, 70% <br>из которых продолжают сотрудничество по сей день. На данный момент насчитывается более 14 офисов <br>по всей стране и 20 городов присутствия.';
    }
  };

  window.addEventListener('resize', checkMediaQueryParagraphs);
}
