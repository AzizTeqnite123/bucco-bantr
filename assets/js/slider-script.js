const swiperBanner = new Swiper(".bannerSlider", {
    effect: "slide",
    speed: 800,
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
});


const lastestPodCastSlider = new Swiper(".lastestPodCastSlider", {
    slidesPerView: 4,
    spaceBetween: 20,
    effect: "slide",
    speed: 800,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});