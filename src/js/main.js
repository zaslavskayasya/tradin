let mainSliderJQ = $('.main-slider');
let mainSlider = document.querySelector('.main-slider');

mainSliderJQ.slick({
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    fade: true,
    cssEase: 'linear'
});

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
        dots: '250px',
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

mainSliderJQ.on('beforeChange', (slick, current, next) => {
    let animateName = 'animate__fadeInUp';
    let currentSlide = current.$slides[next];
    let currentSelectors = currentSlide.querySelectorAll('.animate__animated');
    currentSelectors.forEach(el => el.classList.remove(animateName));
});

mainSliderJQ.on('swipe', (event, slick, direction) => {
    let animateName = 'animate__fadeInUp';
    let currentSlideIdx = slick.currentSlide;
    let currentSlide = slick.$slides[currentSlideIdx];
    let currentSelectors = currentSlide.querySelectorAll('.animate__animated');
    currentSelectors.forEach(el => el.classList.add(animateName));
});

mainDots.querySelectorAll('li').forEach(dot => {
    dot.addEventListener('click', () => {
        let animateName = 'animate__fadeInUp';
        let currentSlideIdx = mainSliderSlick.currentSlide;
        let currentSlide = mainSliderSlick.$slides[currentSlideIdx];
        let currentSelectors = currentSlide.querySelectorAll('.animate__animated');
        currentSelectors.forEach(el => el.classList.add(animateName));
    });
});

mainArrows.forEach(
    arrow => arrow.addEventListener('click', () => {
        let animateName = 'animate__fadeInUp';
        let slick = mainSliderJQ.slick('getSlick');
        let currentSlide = slick.$slides[slick.currentSlide];
        let currentSelectors = currentSlide.querySelectorAll('.animate__animated');
        currentSelectors.forEach(el => el.classList.add(animateName));
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
        },
    ]
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.back-image').forEach(block => {
        let {
            bg: bgImage,
            bgMob: mobImage
        } = block.dataset;
        let url = `url(${window.innerWidth <= 760 ? mobImage : bgImage})`;
        block.style.backgroundImage = url;
    });
});
