const Header = () => {
  const logo = () => {
    const divElement = document.createElement('div');
    divElement.classList.add('logo');

    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', './src/images/logo_transp2.png');
    imgElement.setAttribute('width', '45');
    imgElement.setAttribute('height', '31');
    imgElement.setAttribute('alt', 'Meme Trends Logo');

    divElement.append(imgElement);

    return divElement;
  };

  const buttonsPage = () => {
    const divElement = document.createElement('div');
    divElement.classList.add('buttons-page');

    const buttonHomeElement = document.createElement('button');
    buttonHomeElement.classList.add('home-page-button');
    buttonHomeElement.setAttribute('data-id', 'home');
    buttonHomeElement.setAttribute('data-open', '');

    const iconHomeElement = document.createElement('i');
    iconHomeElement.classList.add('fa', 'fa-home');
    iconHomeElement.setAttribute('aria-hidden', 'true');

    const spanTextHomeElement = document.createElement('span');
    const textHomeElement = document.createTextNode(' Página inicial');
    spanTextHomeElement.append(textHomeElement);

    buttonHomeElement.appendChild(iconHomeElement);
    buttonHomeElement.appendChild(spanTextHomeElement);

    const buttonUploadElement = document.createElement('button');
    buttonUploadElement.classList.add('upload-page-button');
    buttonUploadElement.setAttribute('data-id', 'upload');

    const iconUploadElement = document.createElement('i');
    iconUploadElement.classList.add('fa', 'fa-upload');
    iconUploadElement.setAttribute('aria-hidden', 'true');

    const spanTextUploadElement = document.createElement('span');
    const textUploadElement = document.createTextNode(' Enviar meme');
    spanTextUploadElement.append(textUploadElement);

    buttonUploadElement.appendChild(iconUploadElement);
    buttonUploadElement.append(spanTextUploadElement);

    const buttonDonateElement = document.createElement('button');
    buttonDonateElement.classList.add('donate-page-button');
    buttonDonateElement.setAttribute('data-id', 'donate');

    const iconDonateElement = document.createElement('i');
    iconDonateElement.classList.add('fa', 'fa-coffee');
    iconDonateElement.setAttribute('aria-hidden', 'true');

    const spanTextDonateElement = document.createElement('span');
    const textDonateElement = document.createTextNode(' Me paga um café?');
    spanTextDonateElement.append(textDonateElement);

    buttonDonateElement.appendChild(iconDonateElement);
    buttonDonateElement.append(spanTextDonateElement);

    divElement.append(buttonHomeElement);
    divElement.append(buttonUploadElement);
    divElement.append(buttonDonateElement);

    return divElement;
  };

  const search = () => {
    const divElement = document.createElement('div');
    divElement.classList.add('search');

    const inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('placeholder', '\uf002 Pesquisar');

    divElement.append(inputElement);

    return divElement;
  };

  const create = () => {
    const headerElement = document.querySelector('.page-header');
    const logoElement = logo();
    const buttonsPageElement = buttonsPage();
    const searchElement = search();
    headerElement.appendChild(logoElement);
    headerElement.appendChild(buttonsPageElement);
    headerElement.appendChild(searchElement);
  };

  return {
    create,
  };
};

export default Header;
