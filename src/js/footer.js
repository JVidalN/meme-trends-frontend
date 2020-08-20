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

export default Footer;
