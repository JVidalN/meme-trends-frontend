import Service from './services.js';
const service = Service();

const Home = async () => {
  const memes = await service.getMemes();

  const createDivMemeImageElement = (meme) => {
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
      const divHomeElement = document.querySelector('.main-container .home');
      const DivImageElement = createDivMemeImageElement(meme);

      divHomeElement.appendChild(DivImageElement);
    }
  };

  return {
    create,
  };
};

export default Home;
