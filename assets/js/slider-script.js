const swiperBanner = new Swiper(".bannerSlider", {
    effect: "slide",
    speed: 1000,
    navigation: {
        nextEl: ".bannerslidernext",
        prevEl: ".bannersliderprev",
    },
});

const prodSlider = new Swiper(".prodCardSlider", {
    slidesPerView: 4,
    spaceBetween: 20,
    effect: "slide",
    speed: 800,
    breakpoints: {
        1025: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        769: {
            slidesPerView: 3.2,
            spaceBetween: 20,
        },

        576: {
            slidesPerView: 2.5,
            spaceBetween: 15,
        },
        300: {
            slidesPerView: 1.3,
            spaceBetween: 15,
        },
    },
});


const lastestPodCastSlider = new Swiper(".lastestPodCastSlider", {
    slidesPerView: 4,
    spaceBetween: 20,
    effect: "slide",
    speed: 800,
    breakpoints: {
        1025: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 2.3,
            spaceBetween: 15,
        },
        300: {
            slidesPerView: 1.3,
            spaceBetween: 15,
        },
    },
    loop: true,
    autoplay: {
        delay: 50000,
        disableOnInteraction: false,
    },
});