/**
 * jQuery Scroller 1.0.0
 * @author Raphaël Lefebvre <raphael@raphaellefebvre.be>
 * @website https://github.com/Raphhh/jquery-scroller
 */
(function ( $ ) {
    "use strict";

    $.fn.scroller = function( options ) {

        var settings = $.extend({
                duration: 1500,
                easing: 'easeInOutExpo'
            }, options );

        return this.bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, settings.duration, settings.easing);
            event.preventDefault();
        });

    };

})( jQuery );
