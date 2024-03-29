import Common from "./common/common";

import Testimonials from "./macros/testimonials";
import Portfolio from "./macros/portfolio";
import Hamburger from "./macros/hamburger";
import Menu from "./macros/menu";
import ScrollWowAnimation from "./macros/scrollWowAnimation";


// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {

  // COMMON
  Common.initLoad();

  // MACROS
  Hamburger.init();
  Menu.init();
  Testimonials.init();
  Portfolio.init();
  ScrollWowAnimation.init();

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
