// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(48.8588589, 2.3470599), // Paris

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // From Snazzy Maps
        styles:[
          {
            "featureType": "landscape",
            "stylers": [
              {
                "hue": "#FFAD00"
              },
              {
                "saturation": 50.2
              },
              {
                "lightness": -34.8
              },
              {
                "gamma": 1
              }
            ]
          },
          {
            "featureType": "road.highway",
            "stylers": [
              {
                "hue": "#FFAD00"
              },
              {
                "saturation": -19.8
              },
              {
                "lightness": -1.8
              },
              {
                "gamma": 1
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "stylers": [
              {
                "hue": "#FFAD00"
              },
              {
                "saturation": 72.4
              },
              {
                "lightness": -32.6
              },
              {
                "gamma": 1
              }
            ]
          },
          {
            "featureType": "road.local",
            "stylers": [
              {
                "hue": "#FFAD00"
              },
              {
                "saturation": 74.4
              },
              {
                "lightness": -18
              },
              {
                "gamma": 1
              }
            ]
          },
          {
            "featureType": "water",
            "stylers": [
              {
                "hue": "#00FFA6"
              },
              {
                "saturation": -63.2
              },
              {
                "lightness": 38
              },
              {
                "gamma": 1
              }
            ]
          },
          {
            "featureType": "poi",
            "stylers": [
              {
                "hue": "#FFC300"
              },
              {
                "saturation": 54.2
              },
              {
                "lightness": -14.4
              },
              {
                "gamma": 1
              }
            ]
          }
        ]
    };

    // Get the HTML DOM element that will contain your map
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}
