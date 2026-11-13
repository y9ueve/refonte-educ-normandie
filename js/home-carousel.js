/* Initialisation jCarousel (même logique que jcarousel.skeleton.js du site), limitée au carrousel Partenaires */
(function ($) {
  $(function () {
    var root = $('.home-partners');
    root.find('.jcarousel').jcarousel({});
    root.find('.jcarousel-control-prev')
      .on('jcarouselcontrol:active', function () { $(this).removeClass('inactive'); })
      .on('jcarouselcontrol:inactive', function () { $(this).addClass('inactive'); })
      .on('click', function (e) { e.preventDefault(); })
      .jcarouselControl({ target: '-=1' });
    root.find('.jcarousel-control-next')
      .on('jcarouselcontrol:active', function () { $(this).removeClass('inactive'); })
      .on('jcarouselcontrol:inactive', function () { $(this).addClass('inactive'); })
      .on('click', function (e) { e.preventDefault(); })
      .jcarouselControl({ target: '+=1' });
  });
})(jQuery);
