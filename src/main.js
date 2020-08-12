import Service from './services.js';

const service = Service();

const $ = document.querySelector.bind(document);

const TabNavigation = () => {
  const html = {
    links: [...$('.tab-links').children],
    contents: [...$('.tab-content').children],
    openTab: $('[data-open]'),
  };

  const hideAllTabContent = () => {
    html.contents.forEach((section) => {
      section.style.display = 'none';
    });
  };

  const removeAllActiveClass = () => {
    html.links.forEach((tab) => {
      tab.classList.remove('active');
    });
  };

  const showCurrentTab = (id) => {
    const tabcontent = $(`#${id}`);
    tabcontent.style.display = 'block';
  };

  const selectTab = (event) => {
    hideAllTabContent();
    removeAllActiveClass();

    const target = event.currentTarget;
    showCurrentTab(target.dataset.id);

    target.classList.add('active');
  };

  const listenForChange = () => {
    html.links.forEach((tab) => {
      tab.addEventListener('click', selectTab);
    });
  };

  const init = () => {
    hideAllTabContent();
    listenForChange();

    html.openTab.click();
  };

  return {
    init,
  };
};

const LoadData = async () => {
  const memes = await service.getMemes();

  const createMemeNameElement = (memeName) => {
    console.log(memeName);
    const memeNameElement = document.createElement('h2');
    const memeNameText = document.createTextNode(memeName);
    memeNameElement.append(memeNameText);

    return memeNameElement;
  };

  const createTrendsDateElement = (memeDate) => {
    const trendDateElement = document.createElement('p');
    const trendDateText = document.createTextNode(memeDate);
    trendDateElement.append(trendDateText);

    return trendDateElement;
  };

  const createVotesElement = (memeVote) => {
    const votesElement = document.createElement('p');
    const votesText = document.createTextNode(memeVote);
    votesElement.append(votesText);

    return votesElement;
  };

  const createMemeElement = (memeImg) => {
    const memeElement = document.createElement('img');
    memeElement.setAttribute('src', memeImg);
    memeElement.setAttribute('width', '304');
    memeElement.setAttribute('height', '228');

    return memeElement;
  };

  const makeHtml = () => {
    for (let idx in memes) {
      const meme = memes[idx];
      const sectionMemeElement = $('section#meme');
      const memeNameElement = createMemeNameElement(meme.name);
      const trendDateElement = createVotesElement(meme.trendDate);
      const votesElement = createVotesElement(meme.vote);
      const memeElement = createMemeElement(meme.meme);

      sectionMemeElement.appendChild(memeNameElement);
      sectionMemeElement.appendChild(trendDateElement);
      sectionMemeElement.appendChild(votesElement);
      sectionMemeElement.appendChild(memeElement);
    }
  };

  return {
    makeHtml,
  };
};

window.addEventListener('load', async () => {
  const tabNavigation = TabNavigation();
  tabNavigation.init();

  const loadData = await LoadData();
  loadData.makeHtml();
});
