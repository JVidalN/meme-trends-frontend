import Service from './services.js';

const service = Service();

const MemeElement = async () => {
  const memes = await service.getMemes();

  const creatDivMemeImageElement = (meme) => {
    const divImageElement = document.createElement('div');
    divImageElement.classList.add('images');

    const memeElement = document.createElement('img');
    memeElement.setAttribute('src', meme.meme);
    memeElement.setAttribute('alt', meme.name);

    divImageElement.appendChild(memeElement);

    return divImageElement;
  };

  const create = () => {
    for (let idx in memes) {
      const meme = memes[idx];
      const divMemeGalleryElement = document.querySelector('.main-container');
      const divImageElement = creatDivMemeImageElement(meme);

      divMemeGalleryElement.appendChild(divImageElement);
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
