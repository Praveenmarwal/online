var mainowl = $('.owl-hero-sec');
mainowl.owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    margin: 20,
    loop: true,
    nav: false,
    // navText: [$('.am-next'),$('.am-prev')],
    dotsContainer: '#carousel-custom-dots',
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        575: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
})

var mainowl = $('.app-carouselcard');
mainowl.owlCarousel({
    autoplay: true,
    autoplayTimeout: 8000,
    margin: 20,
    center:true,
    loop: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        575: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 1
        },
        1200: {
            items: 1.5
        }
    }
})

var mainowl = $('.portfolio-carousel');
mainowl.owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    margin: 0,
    loop: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        575: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 2
        },
        1200: {
            items: 2.3
        }
    }
})


var owl = $('.owl-tabs-sec');
owl.owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    margin: 20,
    loop: true,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        575: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
})






var mainowl = $('.specifics-section-slider');
mainowl.owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    margin: 10,
    loop: true,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-chevron-left"></i>',
        '<i class="fa fa-chevron-right"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        575: {
            items: 1.5
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 3
        },
        1400: {
            items: 3.5
        }
    }
})

var mainowl = $('.blog-slider');
mainowl.owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    margin: 10,
    loop: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        575: {
            items: 1.5
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 3
        },
        1400: {
            items: 3.5
        }
    }
})