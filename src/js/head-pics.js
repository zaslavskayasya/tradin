let headerPart = document.querySelector('.header-part');

function updateBackground() {
    let windowWidth = window.innerWidth;
    let {bg: desktopBg, bgMob: mobileBg} = headerPart?.dataset;
    let urlBg = windowWidth <= 760 ? mobileBg : desktopBg;

    headerPart.style.backgroundImage = `url(${urlBg})`;
}

// Викликати функцію для встановлення початкового фону
updateBackground();

// Додати обробник події ресайза
window.addEventListener('resize', updateBackground);