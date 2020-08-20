import TabNavigation from './navigate.js';
import Footer from './footer.js';
import Home from './home.js';

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
  const tabNavigation = TabNavigation();
  const homeElement = await Home();
  const footerElement = await Footer();

  homeElement.create();
  tabNavigation.init();
  footerElement.create();

  hideMenuOnScroll();
});
