import QRCode from '../../images/QRCode.png';

const Donate = async () => {
  const createPaypalDonate = () => {
    const formElement = document.createElement('form');
    formElement.setAttribute('action', 'https://www.paypal.com/cgi-bin/webscr');
    formElement.setAttribute('method', 'post');
    formElement.setAttribute('target', '_blank');

    const inputCmdElement = document.createElement('input');
    inputCmdElement.setAttribute('type', 'hidden');
    inputCmdElement.setAttribute('name', 'cmd');
    inputCmdElement.setAttribute('value', '_donations');

    const inputBusinessElement = document.createElement('input');
    inputBusinessElement.setAttribute('type', 'hidden');
    inputBusinessElement.setAttribute('name', 'business');
    inputBusinessElement.setAttribute('value', 'ZE97RGTTR3CNG');

    const inputItemNameElement = document.createElement('input');
    inputItemNameElement.setAttribute('type', 'hidden');
    inputItemNameElement.setAttribute('name', 'item_name');
    inputItemNameElement.setAttribute('value', 'Me paga um cafe?');

    const inputCurrencyCodeElement = document.createElement('input');
    inputCurrencyCodeElement.setAttribute('type', 'hidden');
    inputCurrencyCodeElement.setAttribute('name', 'currency_code');
    inputCurrencyCodeElement.setAttribute('value', 'BRL');

    const inputSubmitElement = document.createElement('input');
    inputSubmitElement.setAttribute('type', 'image');
    inputSubmitElement.setAttribute(
      'src',
      'https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif'
    );
    inputSubmitElement.setAttribute('border', '0');
    inputSubmitElement.setAttribute('name', 'submit');
    inputSubmitElement.setAttribute(
      'title',
      'PayPal - The safer, easier way to pay online! | A maneira mais segura e fácil de pagar online!'
    );
    inputSubmitElement.setAttribute('alt', 'Faça doações com o botão do PayPal');

    const imgElement = document.createElement('img');
    imgElement.setAttribute('alt', '');
    imgElement.setAttribute('border', '0');
    imgElement.setAttribute('src', 'https://www.paypal.com/pt_BR/i/scr/pixel.gif');
    imgElement.setAttribute('width', '1');
    imgElement.setAttribute('height', '1');

    formElement.appendChild(inputCmdElement);
    formElement.appendChild(inputBusinessElement);
    formElement.appendChild(inputItemNameElement);
    formElement.appendChild(inputCurrencyCodeElement);
    formElement.appendChild(inputSubmitElement);
    formElement.appendChild(imgElement);

    return formElement;
  };

  const createDivButtonElement = () => {
    const divButtonElement = document.createElement('div');
    divButtonElement.classList.add('donate-button');

    const donatePaypalElement = createPaypalDonate();
    divButtonElement.appendChild(donatePaypalElement);

    return divButtonElement;
  };

  const createDivQrCodeElement = () => {
    const divQrCodeElement = document.createElement('div');
    divQrCodeElement.classList.add('donate-qr-code');

    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', QRCode);
    imgElement.setAttribute('alt', 'QR Code Donate');

    divQrCodeElement.appendChild(imgElement);

    return divQrCodeElement;
  };

  const create = () => {
    const divHomeElement = document.querySelector('.donate');
    const divButtonElement = createDivButtonElement();
    const divQrCodeElement = createDivQrCodeElement();

    divHomeElement.appendChild(divButtonElement);
    divHomeElement.appendChild(divQrCodeElement);
  };

  return {
    create,
  };
};

export default Donate;
