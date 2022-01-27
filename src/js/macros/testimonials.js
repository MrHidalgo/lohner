const Testimonials = (function() {
  const init = function() {
    if(!document.querySelector('.testimonialsSwiper')) return;

    new Swiper('.testimonialsSwiper', {
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.testimonials__nav--next',
        prevEl: '.testimonials__nav--prev',
      }
    });
  };
  return {
    init: init
  };

})();

export default Testimonials;
