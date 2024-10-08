let openMenuBtn = document.querySelector('.menu-button');
let headerIs = document.querySelector('.header');
openMenuBtn?.addEventListener('click', () => headerIs?.classList.toggle('open-header'));


let menuItems = document.querySelectorAll('.menu-item');
let filteredMenuItems = Array.from(menuItems).filter(item => {
    // Перевіряємо, чи елемент не знаходиться всередині .sub-menu
    return !item.closest('.sub-menu');
  });

// console.log(filteredMenuItems);

filteredMenuItems.forEach(item => {
    item.classList.add('sanimate', 'fadeInLeft');
})


let dropdownTriggers = document.querySelectorAll('.menu-item-has-children');

function toggleDropdowns() {
    // Check screen width
    if (window.innerWidth < 760) {
        dropdownTriggers.forEach((item) => {
            // If the event listener is not already added, add it
            if (!item.classList.contains('listener-added')) {
                item.addEventListener('click', toggleDropdown);
                item.classList.add('listener-added');
            }
        });
    } else {
        // Remove event listeners if screen width is greater than or equal to 760px
        dropdownTriggers.forEach((item) => {
            if (item.classList.contains('listener-added')) {
                item.removeEventListener('click', toggleDropdown);
                item.classList.remove('listener-added');
            }
        });
    }
}

function toggleDropdown(e) {
    let item = e.currentTarget;
    item?.classList.toggle('open');
}

// Initial load
toggleDropdowns();

// Handle window resize
window.addEventListener('resize', toggleDropdowns);




let lastScrollTop = 0;
let header = document.querySelector('.header');
let debounceTimeout;
let scrollThreshold = 5; // Поріг прокрутки, щоб не реагувати на невеликі зміни

window.addEventListener('scroll', function() {
    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(() => {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (Math.abs(scrollTop - lastScrollTop) <= scrollThreshold) {
            // Ігноруємо невеликі зміни прокрутки
            return;
        }

        if (scrollTop > lastScrollTop) {
            // Прокрутка вниз
            header.classList.add('hidden');
        } else {
            // Прокрутка вгору
            header.classList.remove('hidden');
        }

        lastScrollTop = scrollTop;
    }, 100); // Збільшена затримка для більш плавного ефекту
});


var navIcons = document.querySelectorAll('#nav-icon');
navIcons.forEach(function(icon) {
    icon.addEventListener('click', function() {
        this.classList.toggle('open');
    });
});


headerIs.querySelectorAll('.menu-item-has-children').forEach(li => {
    li.addEventListener('mouseenter', e => {
        let sub = li.querySelector('.sub-menu');
        let {left: offsetLeft, width: subWidth} = sub.getBoundingClientRect();
        let width = window.innerWidth;
        let mustOffsetRight = 80;
        let diff = (subWidth + offsetLeft + mustOffsetRight) - width;

        if (0 < diff){
            sub.style.left = `${parseFloat(getComputedStyle(sub)['left']) - diff}px`;
        }
    });
});

document.querySelectorAll('.back-image').forEach(block => {
    let {
        bg: bgImage,
        bgMob: mobImage
    } = block.dataset;
    let url = `url(${window.innerWidth <= 760 ? mobImage : bgImage})`;
    block.style.backgroundImage = url;
});

let blocks = document.querySelectorAll('.scroll.sanimate');
let clientsSlides = document.querySelectorAll('.clients-slider > .slide.sanimate');

clientsSlides.forEach((slide, index) => {
    slide.style.animationDelay = `${index * 170}ms`;
});

let observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeInUp');
            observer.unobserve(entry.target);
        }
    });
};

blocks.forEach(block => {
    new IntersectionObserver(observerCallback, {
        threshold: 0.3
    }).observe(block);
});

clientsSlides.forEach(block => {
    new IntersectionObserver(observerCallback, {
        threshold: 0.4
    }).observe(block);
});

let allTexts = document.querySelectorAll('p, h2');
allTexts?.forEach(item => {
    if (!item.closest('.main-slider'))
        item.classList.add('sanimate', 'fadeInUp');
});
//# sourceMappingURL=header.js.map