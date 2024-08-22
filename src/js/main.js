let mainSliderJQ = $('.main-slider');
let mainSlider = document.querySelector('.main-slider');

mainSliderJQ.slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    fade: true,
    speed: 1500,
    autoplay: true,
    cssEase: 'linear',
    adaptiveHeight: true
});

let isUserUse = 0;
let logo = document.querySelector('.logo');
let mainSliderSlick = mainSliderJQ.slick('getSlick');
let mainFirstSlide = mainSliderSlick?.$slides[0];

let mainArrows = document.querySelectorAll('.slick-arrow');
let mainDots = mainSlider.querySelector('.slick-dots');
let mainText = mainSlider.querySelector('.slick-active')
    ?.querySelector('.texts-block');

let mobile = {
    default: {
        dots: '148px',
        arrows: '54px',
    },
};

let desktop = {
    default: {
        dots: '190px',
        arrows: '54px',
    },
};

let getOffsetLeft = selector => {
    if (!selector)
        return selector
    if (selector.offsetLeft)
        return selector.offsetLeft;
    else if (selector && !selector.offsetLeft)
        return getOffsetLeft(selector?.offsetParent);
};

let getOffsetTop = selector => {
    if (!selector)
        return selector
    if (selector.offsetTop)
        return selector.offsetTop;
    else if (selector && !selector.offsetTop)
        return getOffsetTop(selector?.offsetParent);
};

let calculateProperty = (currentProperty, newProperty) => {
    if (typeof newProperty == 'string') {
        currentValue = parseFloat(currentProperty);
        newValue = parseFloat(newProperty.slice(2, -2));

        if (['auto', 'none', 'inherit'].includes(newProperty) || /%$/g.test(newProperty)) {
            return newProperty;
        } else if (currentValue && newProperty.startsWith('+=')) {
            return `${currentValue - newValue}px`;
        } else if (currentValue && newProperty.startsWith('-=')) {
            return `${currentValue - newValue}px`;
        }

        let result = parseFloat(newProperty) || 0;
        return `${result}px`;
    }
};

let setCSS = (element, properties) => {
    for (let property in properties) {
        currentStyleValue = getComputedStyle(element)[property];
        element.style[property] = `${calculateProperty(currentStyleValue, properties[property])}`;
    }
};

function protoCSS(properties) {
    Array.from(this).forEach(el => setCSS(el, properties));
}

function customCSS(properties) {
    setCSS(this, properties);
}

NodeList.prototype.css = protoCSS;
HTMLUListElement.prototype.css = customCSS;

let animations = document.querySelectorAll('.sanimate');
animations.forEach(el => {
    let {
        delay,
        duration,
        timing
    } = el.dataset;

    if (delay)
        el.style.animationDelay = delay;

    if (duration)
        el.style.animationDuration = duration;

    if (timing)
        el.style.animationTimingFunction = timing;
});

setTimeout(() => {
    mainFirstSlide.querySelector('.hide')?.classList.remove('hide');
    mainArrows.forEach(arrow => arrow.classList.add('sanimate', 'fadeInUp'));
    if(mainDots){

        mainDots.classList.add('sanimate', 'fadeInUp');
    }

    mainFirstSlide.querySelectorAll('.sanimate')?.forEach(el => el.classList.add('fadeInUp'))
}, 400);

function animateMainSlider(slick, action = 'click'){
    let animateName = 'fadeInUp';
    let currentSlideIdx = slick.currentSlide;
    let currentSlide = slick.$slides[currentSlideIdx];
    let currentSelectors = currentSlide.querySelectorAll('.sanimate');

    mainSlider.querySelectorAll('.texts-block > .fadeInUp')
        ?.forEach(el => el.classList.remove(animateName));

    currentSelectors.forEach(el => {
        if (['click', 'swipe'].includes(action)){
            el.classList.add(animateName);
        }
    });

    if (['before'].includes(action)){
        if (!isUserUse){
            let nextIdx = currentSlideIdx + 1;
            let slidesCount = slick.$slides.length - 1;
            slick.$slides[nextIdx > slidesCount ? 0 : nextIdx]
                .querySelectorAll('.sanimate')
                ?.forEach(el => el.classList.add(animateName));
        }
    }

    isUserUse = 0;
};
    

mainSliderJQ.on('beforeChange', (event, slick, next) => animateMainSlider(slick, 'before'));
mainSliderJQ.on('swipe', (event, slick, direction) => {
    isUserUse = 1;
    animateMainSlider(slick, 'swipe');
});

if(mainDots){
    mainDots.querySelectorAll('li').forEach(dot => {
        dot.addEventListener('click', () => {
            isUserUse = 1;
            animateMainSlider(mainSliderSlick, 'click');
        });
    });

}

mainArrows.forEach(
    arrow => arrow.addEventListener('click', () => {
        isUserUse = 1;
        animateMainSlider(mainSliderSlick, 'click');
    })
);

$('.clients-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    mobileFirst: true,

    responsive: [{
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
            breakpoint: 1280,
            settings: "unslick"
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
    responsive: [{
        breakpoint: 760,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            centerMode: true,
        }
    }, ]
});

// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll('.back-image').forEach(block => {
//         let {
//             bg: bgImage,
//             bgMob: mobImage
//         } = block.dataset;
//         let url = `url(${window.innerWidth <= 760 ? mobImage : bgImage})`;
//         block.style.backgroundImage = url;
//     });

//     let blocks = document.querySelectorAll('.scroll.sanimate');
//     let clientsSlides = document.querySelectorAll('.clients-slider > .slide.sanimate');

//     clientsSlides.forEach((slide, index) => {
//         slide.style.animationDelay = `${index * 170}ms`;
//     });

//     let observerCallback = (entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('fadeInUp');
//                 observer.unobserve(entry.target);
//             }
//         });
//     };

//     blocks.forEach(block => {
//         new IntersectionObserver(observerCallback, {
//             threshold: 0.2
//         }).observe(block);
//     });

//     clientsSlides.forEach(block => {
//         new IntersectionObserver(observerCallback, {
//             threshold: 0.4
//         }).observe(block);
//     });
// });