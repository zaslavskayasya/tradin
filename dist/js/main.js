
$('.main-slider').slick();

$('.clients-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
            }
        },
        {
            breakpoint: 99999, // Устанавливаем большое значение, чтобы "unslick" не срабатывал случайно
            settings: "unslick" // Отключение слайдера при больших экранах
        }
    ]
});
//# sourceMappingURL=main.js.map