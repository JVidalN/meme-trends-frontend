import Service from './services.js';

const service = Service();

const MemeElement = async () => {
  const memes = await service.getMemes();

  const createDivMemeTitleElement = (meme) => {
    const divTitleElement = document.createElement('div');
    divTitleElement.classList.add('title');

    const linkContributeElement = document.createElement('a');
    linkContributeElement.classList.add('contribute');
    linkContributeElement.setAttribute('href', '#');

    const divPictureElement = document.createElement('div');
    divPictureElement.classList.add('profile-picture');

    const memeImageElement = document.createElement('img');
    memeImageElement.setAttribute('src', meme.meme);
    memeImageElement.setAttribute('alt', meme.name);

    const memeNameElement = document.createElement('h5');
    const memeNameTextElement = document.createTextNode(meme.name);
    memeNameElement.append(memeNameTextElement);

    const linkWhistElement = document.createElement('a');
    linkContributeElement.classList.add('add-whist');
    linkWhistElement.setAttribute('href', '#');

    const iconElement = document.createElement('i');
    let random = Math.floor(Math.random() * 10) % 2;
    const classIcon = `fa${random === 1 ? 'r' : 's'}`;
    iconElement.classList.add(classIcon, 'fa-heart');

    divPictureElement.appendChild(memeImageElement);
    linkContributeElement.appendChild(divPictureElement);
    linkContributeElement.appendChild(memeNameElement);
    linkWhistElement.appendChild(iconElement);
    divTitleElement.appendChild(linkContributeElement);
    divTitleElement.appendChild(linkWhistElement);

    return divTitleElement;
  };

  const creatDivMemeImageElement = (meme) => {
    const divImageElement = document.createElement('div');
    divImageElement.classList.add('image');

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');

    const memeElement = document.createElement('img');
    memeElement.setAttribute('src', meme.meme);
    memeElement.setAttribute('alt', meme.name);

    linkElement.appendChild(memeElement);
    divImageElement.appendChild(linkElement);

    return divImageElement;
  };

  const createDivMemeContentElement = () => {
    const divMemeContentElement = document.createElement('div');
    divMemeContentElement.classList.add('box-content');

    return divMemeContentElement;
  };

  const create = () => {
    for (let idx in memes) {
      const meme = memes[idx];
      const divMemeContentGalleryElement = document.querySelector('.body-content.gallery');
      const divMemeContentElement = createDivMemeContentElement();
      const divImageElement = creatDivMemeImageElement(meme);
      const divTitleElement = createDivMemeTitleElement(meme);

      divMemeContentElement.appendChild(divImageElement);
      divMemeContentElement.appendChild(divTitleElement);
      divMemeContentGalleryElement.appendChild(divMemeContentElement);
    }
  };

  return {
    create,
  };
};

window.addEventListener('load', async () => {
  const memeElement = await MemeElement();
  memeElement.create();
});

const getWhistToggle = document.getElementsByClassName('add-whist');
for (let i = 0; i <= getWhistToggle.length - 1; i++) {
  getWhistToggle[i].addEventListener('click', () => {
    getWhistToggle[i].innerHTML = '<i class="fas fa-heart"></i>';
  });
}
