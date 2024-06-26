let mainSlider = $('.main-slider');

mainSlider.slick({
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    fade: true,
    cssEase: 'linear'
    // adaptiveHeight: true,
});

let logo = document.querySelector('.logo');
let mainSliderSlick = mainSlider.slick('getSlick');
let mainArrows = mainSlider.children('.slick-arrow');
let mainDots = mainSliderSlick?.$dots[0];
let mainFirstSlide = mainSliderSlick?.$slides[0];
let mainOffset = mainFirstSlide?.querySelector('.button')?.offsetTop;

let getOffsetLeft = sel => {
    let offset = sel.offsetLeft;

    if (!offset)
        return getOffsetLeft(sel?.offsetParent);

    return offset;
};

// Change this
let offsetArrows = 167; // px
let offsetDots = 85; // px
let mainTopSet;

// After init show arrows and dots
if (mainOffset){
    mainTopSet = mainOffset + offsetDots;
    mainArrows.css({
        "opacity": 1,
        "top": mainOffset + offsetArrows
    });

    if (window.innerWidth <= 760){
        mainDots.style.cssText = `top: ${mainTopSet}px; opacity: 1;`;
        
        mainArrows.css({
            "opacity": 1,
            "top": mainOffset + offsetArrows
        });
    } else {
        let textOffset = getOffsetLeft(mainFirstSlide.querySelector('.texts-block'));
        mainDots.style.cssText = `bottom: 160px; left: ${textOffset+30}px; margin: 0; opacity: 1;`;

        if (window.innerWidth >= 1280){
            mainDots.style.cssText = `bottom: 80px; left: ${textOffset+30}px; margin: 0; opacity: 1;`;
            mainArrows.css({
                "top": 270,
                "left": `-=${getOffsetLeft(mainArrows[0])-getOffsetLeft(logo)}`,
            });
        } else {
            mainArrows.css({
                "top": mainOffset + offsetArrows,
                "left": `-=${getOffsetLeft(mainArrows[0])-textOffset-9}`
            });
        }
    }
}

mainSlider.on('beforeChange', (slick, current, next) => {
    mainDots.style.cssText = `opacity: 0;`;
    mainArrows.css("opacity", 0);
});

mainSlider.on('afterChange', (slick, current) => {
    let slide = current.$slides[current.currentSlide];
    let currentSlideHeight = slide.querySelector('.button')?.offsetTop;
    let mainTopSet = currentSlideHeight + offsetDots;
    
    if (window.innerWidth <= 760){
        mainArrows.css({
            "opacity": 1,
            "top": currentSlideHeight + offsetArrows
        });
        mainDots.style.cssText = `opacity: 1; bottom: 140px;`;
    } else {
        let textOffset = getOffsetLeft(mainFirstSlide.querySelector('.texts-block'));
        mainDots.style.cssText = `bottom: 160px; left: ${textOffset+30}px; margin: 0; opacity: 1;`;

        if (window.innerWidth >= 1280){
            mainDots.style.cssText = `bottom: 80px; left: ${textOffset+30}px; margin: 0; opacity: 1;`;
            mainArrows.css({
                "opacity": 1,
                "top": 270,
                "left": `-=${getOffsetLeft(mainArrows[0])-getOffsetLeft(logo)-8}`
            });
        } else {
            mainArrows.css({
                "opacity": 1,
                "top": currentSlideHeight + offsetArrows
            });
        }
    }
});

window.addEventListener("resize", event => {
    let mainTextBlock = document.querySelector('.slick-active');
    let mainTextPosition = mainTextBlock.querySelector('.texts-block');
    let offsetButton = mainTextBlock.querySelector('.button').offsetTop;
    let mainTopSet = offsetButton + offsetDots;
    let offsetArrow = offsetButton + offsetArrows;
    
    if (window.innerWidth <= 760){
        mainDots.style.cssText = `opacity: 1; top: ${mainTopSet}px`;
        mainArrows.css({
            "opacity": 1,
            "top": offsetArrow,
            "left": ""
        });
    } else {
        let textOffset = getOffsetLeft(mainTextPosition);
        
        if (window.innerWidth >= 1280){
            mainDots.style.cssText = `top: ${mainTopSet+95}px; left: ${textOffset}px; margin: 0; opacity: 1;`;
            mainArrows.css({
                "top": 270,
                "left": `-=${getOffsetLeft(mainArrows[0])-getOffsetLeft(logo)}`
            });
        } else {
            mainArrows.css({
                "top": offsetArrow,
                "left": `-=${getOffsetLeft(mainArrows[0])-textOffset-8}`
            });
        }
    }
});

// $('.selector').slick({
//     nextArrow: '<i class="fa fa-arrow-right"></i>',
//     prevArrow: '<i class="fa fa-arrow-left"></i>',
//   // add the rest of your options here
//   });



$('.clients-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    mobileFirst: true,

    responsive: [
        {
            breakpoint: 560,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                dots: true,
            }
        },
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                dots: true,
            }
        },
        {
            breakpoint: 1280, // Устанавливаем большое значение, чтобы "unslick" не срабатывал случайно
            settings: "unslick" // Отключение слайдера при больших экранах
        }
    ]
});

$('.news-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    adaptiveHeight: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                centerMode: true,
            }
        },
       
    ]
});

document.addEventListener("DOMContentLoaded", function() {
    const blocks = document.querySelectorAll('.back-image');
    
    blocks.forEach(block => {
      const bgImage = block.getAttribute('data-bg');
      const mobImage = block.getAttribute('data-bg-mob');

      block.style.backgroundImage = `url(${bgImage})`;
      if(window.innerWidth <= 760){
        block.style.backgroundImage = `url(${mobImage})`;
      }

    });
  });


//   document.addEventListener('DOMContentLoaded', function () {
//     function updateOffsets() {
//         const textsBlock = document.querySelector('.texts-block');
//         const slickDots = document.querySelector('.slick-dots');
//         const slickPrev = document.querySelector('.main-slider .slick-prev');
//         const slickNext = document.querySelector('.main-slider .slick-next');

//         if (!textsBlock || !slickDots || !slickPrev || !slickNext) return;

//         const textsBlockOffset = textsBlock.getBoundingClientRect().left;

//         slickDots.style.left = `${textsBlockOffset}px`;

//         const screenWidth = window.innerWidth;

//         if (screenWidth >= 760 && screenWidth <= 1200) {
//             slickPrev.style.left = `${textsBlockOffset}px`;
//             slickNext.style.left = `${textsBlockOffset + 45}px`;
//         } else if (screenWidth > 1200) {
//             slickPrev.style.left = 'initial';
//             slickNext.style.left = `${textsBlockOffset + 45}px`;
//         } else {
//             slickPrev.style.left = 'initial';
//             slickNext.style.left = 'initial';
//         }
//     }

//     window.addEventListener('resize', updateOffsets);
//     updateOffsets();
// });
//# sourceMappingURL=main.js.map