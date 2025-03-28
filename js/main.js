var myCarousel = new bootstrap.Carousel(document.querySelector('#carouselExample'), {
    interval: 3000, // الانتقال كل 3 ثوانٍ
    pause: false,   // لا يتوقف عند مرور الماوس
    wrap: true      // يستمر بالدوران بعد آخر صورة
});