import TabNavigation from './js/navigate.js';
import Header from './js/header.js';
import Footer from './js/footer.js';
import Home from './js/views/homePage.js';
import Upload from './js/views/uploadPage.js';
import Donate from './js/views/donatePage.js';

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

window.addEventListener('load', async () => {
  const headerElement = Header();
  const homeElement = await Home();
  const uploadElement = await Upload();
  const donateElement = await Donate();
  const footerElement = Footer();

  headerElement.create();
  homeElement.create();
  uploadElement.create();
  donateElement.create();
  footerElement.create();

  const tabNavigation = TabNavigation();
  tabNavigation.init();

  hideMenuOnScroll();
});
