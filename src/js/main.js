import Service from './services.js';

const service = Service();

const Main = async () => {
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

const Footer = () => {
  const socialMediaUrls = [
    {
      name: 'Twitter',
      url: 'https://twitter.com/JVidalN',
    },
    {
      name: 'CodePen',
      url: 'https://codepen.io/jvidaln',
    },
    {
      name: 'StackOverflow',
      url: 'https://stackoverflow.com/users/5854978',
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/jvidalnunes',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/JVidalN',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/jvidalnunes',
    },
  ];

  const socialMedia = () => {
    const divElement = document.createElement('div');
    divElement.classList.add('social-media');

    const textSocialElement = document.createTextNode('Connect with me: ');
    divElement.append(textSocialElement);

    const myRegexp = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n.?]+)/gim;

    for (let indexUrl in socialMediaUrls) {
      let socialName = socialMediaUrls[indexUrl].name.toLowerCase();
      let alt = socialMediaUrls[indexUrl].name;
      let width = '24px';
      let src = `https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/${socialName}.svg`;

      let linkMediaElement = document.createElement('a');
      linkMediaElement.setAttribute('href', socialMediaUrls[indexUrl].url);
      linkMediaElement.setAttribute('target', '_blank');

      let imgElement = document.createElement('img');
      imgElement.setAttribute('src', src);
      imgElement.setAttribute('alt', alt);
      imgElement.setAttribute('width', width);

      linkMediaElement.appendChild(imgElement);

      divElement.appendChild(linkMediaElement);
    }

    return divElement;
  };

  const copyright = () => {
    const divElement = document.createElement('div');
    divElement.classList.add('copyright');

    const textFooterElement = document.createTextNode(
      `Copyright © ${new Date().getFullYear()} - Jean Vidal`
    );

    divElement.append(textFooterElement);

    return divElement;
  };

  const create = () => {
    const footerElement = document.querySelector('.page-footer');
    const textFooterElement = copyright();
    const socialMediaElement = socialMedia();
    footerElement.appendChild(textFooterElement);
    footerElement.appendChild(socialMediaElement);
  };

  return {
    create,
  };
};

const hideMenuOnScroll = () => {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementsByTagName('header')[0].style.top = '0';
      document.getElementsByTagName('footer')[0].style.bottom = '0';
    } else {
      document.getElementsByTagName('header')[0].style.top = '-80px';
      document.getElementsByTagName('footer')[0].style.bottom = '-80px';
    }
    prevScrollpos = currentScrollPos;
  };
};

const isHomePage = () => {
  const pathname = window.location.pathname;
  return pathname === '/frontend/index.html' || pathname === '/frontend/';
};

const applyCssInHome = () => {
  const homeButton = document.querySelector('.home-page-button');
  const linkHomeButton = document.querySelector('.home-page-button a');
  const uploadButton = document.querySelector('.upload-page-button');
  const linkuploadButton = document.querySelector('.upload-page-button a');

  if (isHomePage()) {
    homeButton.style.backgroundColor = 'black';
    linkHomeButton.style.color = 'white';
    uploadButton.style.backgroundColor = '#8a7ddc';
    linkuploadButton.style.color = 'white';
  } else {
    homeButton.style.backgroundColor = '#8a7ddc';
    linkHomeButton.style.color = 'white';
    uploadButton.style.backgroundColor = 'black';
    linkuploadButton.style.color = 'white';
  }
};

window.addEventListener('load', async () => {
  if (isHomePage()) {
    const mainElement = await Main();
    mainElement.create();
  }
  const footerElement = await Footer();
  footerElement.create();
  hideMenuOnScroll();
  applyCssInHome();
});
