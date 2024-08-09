let headerPart = document.querySelector('.header-part');

function updateBackground() {
    let windowWidth = window.innerWidth;
    let {bg: desktopBg} = headerPart?.dataset;
   
    headerPart.style.backgroundImage = `url(${desktopBg})`;
}

// Викликати функцію для встановлення початкового фону
updateBackground();

// Додати обробник події ресайза
window.addEventListener('resize', updateBackground);
//# sourceMappingURL=head-pics.js.map