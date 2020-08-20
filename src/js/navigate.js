const TabNavigation = () => {
  const $ = document.querySelector.bind(document);
  const html = {
    links: [...$('.buttons-page').children],
    contents: [...$('.main-container').children],
    openTab: $('[data-open]'),
  };

  const hideAllDivContent = () => {
    html.contents.forEach((div) => {
      div.style.display = 'none';
    });
  };

  const removeAllActiveClass = () => {
    html.links.forEach((button) => {
      button.classList.remove('active');
    });
  };

  const showCurrentTab = (id) => {
    const divcontent = $(`#${id}`);
    divcontent.style.display = 'block';
  };

  const selectTab = (event) => {
    hideAllDivContent();
    removeAllActiveClass();

    const target = event.currentTarget;
    showCurrentTab(target.dataset.id);

    target.classList.add('active');
  };

  const listenForChange = () => {
    html.links.forEach((button) => {
      button.addEventListener('click', selectTab);
    });
  };

  const init = () => {
    hideAllDivContent();
    listenForChange();

    html.openTab.click();
  };

  return {
    init,
  };
};

export default TabNavigation;
