console.log('test');


let openMenuBtn = document.querySelector('.menu-button');

let headerIs = document.querySelector('.header');

openMenuBtn.addEventListener('click', ()=>{
    if (headerIs.classList.contains('open-header')) {
        headerIs.classList.remove('open-header');
        return;
    }
    headerIs.classList.add('open-header');
});



// closeMenuBtn.addEventListener('click', ()=>{
//     headerIs.classList.remove('open-header')
// });



let dropdownTriggers = document.querySelectorAll('.dropup');

dropdownTriggers.forEach((item, e)=>{
    item.addEventListener('click', (e)=>{
        // console.log(item);
        
        if(item.classList.contains("open")){
            item.classList.remove("open");
        } else {
            item.classList.add("open");
        }

    })
});

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


// let lastScrollTop = 0;
// let header = document.querySelector('.header');
// let debounceTimeout;
// let scrollThreshold = 5;

// window.addEventListener('scroll', () => {
//     let scrollTop = window.scrollY;

//     if (Math.abs(scrollTop - lastScrollTop) <= scrollThreshold) {
//     // Ігноруємо невеликі зміни прокрутки
//         return;
//     }

//     if (scrollTop > lastScrollTop){
//         header.classList.add('hidden');
//         return;
//     }
//     header.classList.remove('hidden');

//     lastScrollTop = scrollTop;
// });
//# sourceMappingURL=header.js.map