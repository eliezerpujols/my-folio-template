(function($) {
   "use strict"; // Start of use strict
   
   // Pre-loader Setting
   $(window).load(function() {
      $("#pre-loader").fadeOut("slow");
   });

   // jQuery for page scrolling feature - requires jQuery Easing plugin
   $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: ($($anchor.attr('href')).offset().top - 48)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
   });

   // Highlight the top nav as scrolling occurs
   $('body').scrollspy({
      target: '.navbar-fixed-top',
      offset: 51
   });

   // Closes the Responsive Menu on Menu Item Click
   $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
   });

   // Offset for Main Navigation
   $('.navbar-default').affix({
      offset: {
         top: 100
      }
   });
})(jQuery); // End of use strict
