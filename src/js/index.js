import TabNavigation from './navigate.js';
import Header from './header.js';
import Footer from './footer.js';
import Home from './views/homePage.js';
import Donate from './views/donatePage.js';

import Ico from '../images/favicon.ico';

import '../css/styles.css';

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

const createIco = () => {
  const iconElement = document.createElement('link');
  iconElement.setAttribute('rel', 'icon');
  iconElement.setAttribute('type', 'image/x-icon');
  iconElement.setAttribute('href', Ico);

  return iconElement;
};

window.addEventListener('load', async () => {
  const iconElement = createIco();
  const headerElement = Header();
  const homeElement = await Home();
  const donateElement = await Donate();
  const footerElement = Footer();

  document.head.appendChild(iconElement);
  headerElement.create();
  homeElement.create();
  donateElement.create();
  footerElement.create();

  const tabNavigation = TabNavigation();
  tabNavigation.init();

  hideMenuOnScroll();
});
