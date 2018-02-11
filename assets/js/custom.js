// Hamburger Menu
var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }

// jQuery
$(document).ready(function(){

  $('.post-featured-image, .post-single-featured p').imagesLoaded().done( onloadimg );

function onloadimg(){
  $('.loading').hide();
  console.log('DONE  - all images have been successfully loaded');
  $('.post-featured, .post-featured-image, .post-single-featured p').show();
  $('.post-featured, .post-featured-image').addClass('animated fadeInUp');
  $('.pagination').show();
  $('.content').masonry({
  // options
     itemSelector: '.grid'
    });

  $('.post-single-featured').masonry({
  // options
  itemSelector: 'p'
});

} //onloadimg


  // Menu
  $( ".hamburger" ).click(function() {
  $( ".menu" ).toggle();
});

  // Magnific Popup
  $('.post-single-featured').magnificPopup({
    delegate: 'a',
  type: 'image',
  gallery:{
    enabled:true
  },
  image: { titleSrc: function(item) {
     return item.el.attr('title');
   }, tError: '<a href="%url%">The image</a> could not be loaded.'  },
  mainClass: 'mfp-with-zoom', // this class is for CSS animation below

  zoom: {
    enabled: true, // By default it's false, so don't forget to enable it

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-out-in', // CSS transition easing function

    // The "opener" function should return the element from which popup will be zoomed in
    // and to which popup will be scaled down
    // By defailt it looks for an image tag:
    opener: function(openerElement) {
      // openerElement is the element on which popup was initialized, in this case its <a> tag
      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }
});

var $images = $('img');
$images.click(function(event) {
  var target = $(this).attr('src');
  window.open(target);
})

}); //jQuery ready
