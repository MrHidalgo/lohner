import Common from "./common/common";

import Testimonials from "./macros/testimonials";
import Portfolio from "./macros/portfolio";


// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {

  // COMMON
  Common.initLoad();

  // MACROS
  Testimonials.init();
  Portfolio.init();

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
