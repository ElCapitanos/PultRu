$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
      owl.owlCarousel({
      items:4,
      margin:0,
      loop: true,
      nav: true,
      pagination : true,
      dots:false,
      responsive: {
        300: {
          items: 1,
          nav: false,
          dotsEach: true,
          dots:true,
        },
        591: {
          items: 2,
          nav: false,
          dotsEach: true,
          dots:true,
        },
        900: {
          items: 3,
          nav: false,
          dotsEach: true,
          dots:true,
        },

        1250: {
          items: 4,
          nav: true,
        },
      },
      navText: [
        '<span class="arrow-owl carousel__arrow carousel__arrow_left gold">&#8735;</span>',
        '<span class="arrow-owl carousel__arrow carousel__arrow_right gold">&#8735;</span>'
      ],
    });
  });


