const ScrollWowAnimation = (function() {
  const init = function() {
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 50,
      mobile: true,
      live: true,
      scrollContainer: null,
      resetAnimation: true,
    });

    wow.init();
  };
  return {
    init: init
  };

})();

export default ScrollWowAnimation;
