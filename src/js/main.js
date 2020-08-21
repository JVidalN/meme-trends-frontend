import TabNavigation from './navigate.js';
import Header from './header.js';
import Footer from './footer.js';
import Home from './pages/homePage.js';

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
  const footerElement = Footer();

  headerElement.create();
  homeElement.create();
  footerElement.create();

  const tabNavigation = TabNavigation();
  tabNavigation.init();

  hideMenuOnScroll();
});
