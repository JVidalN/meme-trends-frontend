import Service from '../services.js';
const service = Service();

const Home = async () => {
  const memes = await service.getMemes();

  const createDivMemeImageElement = (meme) => {
    const divImageElement = document.createElement('div');
    divImageElement.classList.add('images');

    const memeElement = document.createElement('img');
    memeElement.setAttribute('src', meme.meme);
    memeElement.setAttribute('alt', meme.name);

    const iconOptionsElement = document.createElement('span');
    iconOptionsElement.classList.add('fa', 'fa-ellipsis-h');
    iconOptionsElement.setAttribute('aria-hidden', 'true');

    divImageElement.appendChild(memeElement);
    divImageElement.appendChild(iconOptionsElement);

    return divImageElement;
  };

  const create = () => {
    for (let idx in memes) {
      const meme = memes[idx];
      const divHomeElement = document.querySelector('.main-container .home');
      const DivImageElement = createDivMemeImageElement(meme);

      divHomeElement.appendChild(DivImageElement);
    }

    const ListIconOptionsElement = document.querySelectorAll('.images .fa-ellipsis-h');
    for (let iconOptionsElement of ListIconOptionsElement) {
      iconOptionsElement.addEventListener('click', (evt) => {
        console.log(evt);
      });
    }
  };

  return {
    create,
  };
};

export default Home;
