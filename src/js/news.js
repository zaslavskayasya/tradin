let newsArray = document.querySelectorAll(".news-item");

// console.log(newsArray);

// for (let i = 0; i < newsArray.length; i++) {
//     if (i < 3) {
//       newsArray[i].style.display = 'block';
//     } else {
//       newsArray[i].style.display = 'none';
//     }
// }

function updateDisplay() {
    let screenWidth = window.innerWidth;
  
    for (let i = 0; i < newsArray.length; i++) {
      if (screenWidth < 760) {
        // На екранах менше 760 пікселів
        if (i < 3) {
          newsArray[i].style.display = 'block';
        } else {
          newsArray[i].style.display = 'none';
        }
      } else {
        // На екранах більше або рівно 760 пікселів
        if (i < 9) {
          newsArray[i].style.display = 'block';
        } else {
          newsArray[i].style.display = 'none';
        }
      }
    }
  }
  
  // Викликаємо функцію при завантаженні сторінки
  updateDisplay();
  
  // Додаємо слухача події на зміну розміру вікна
  window.addEventListener('resize', updateDisplay);

//   let screenWidth = window.innerWidth;
//   let paginationArray = document.querySelectorAll('.num');
  
//   // Перевіряємо правильність отримання елементів
//   console.log(paginationArray);
  
//   // Проходимо по кожному елементу
//   paginationArray.forEach(element => {
//     let targetSlide = parseInt(element.dataset.targetslide); // Перетворюємо на число
//     console.log(`data-targetSlide: ${targetSlide}`);
    
  
//     element.addEventListener("click", (event) => {
//       console.log(event.currentTarget.dataset.targetslide);

//       paginationArray.forEach((el)=> {
//           el.classList.remove('active')
//       })

//       event.currentTarget.classList.add('active');
  
//       if (screenWidth < 760) {
//         switch (targetSlide) {
//           case 1:
//             for (let i = 0; i < newsArray.length; i++) {
//               newsArray[i].style.display = 'none';
//             }
//             newsArray[0].style.display = 'block';
//             newsArray[1].style.display = 'block';
//             newsArray[2].style.display = 'block';
//             break;
//           case 2:
//             for (let i = 0; i < newsArray.length; i++) {
//               newsArray[i].style.display = 'none';
//             }
//             newsArray[3].style.display = 'block';
//             newsArray[4].style.display = 'block';
//             newsArray[5].style.display = 'block';
//             break;
//           case 10:
//             for (let i = 0; i < newsArray.length; i++) {
//               newsArray[i].style.display = 'none';
//             }
//             newsArray[6].style.display = 'block';
//             newsArray[7].style.display = 'block';
//             newsArray[8].style.display = 'block';
//             break;
//           default:
//             // Інші випадки
//             break;
//         }
//       } else{
//         switch (targetSlide) {
//             case 1:
//               for (let i = 0; i < newsArray.length; i++) {
//                 newsArray[i].style.display = 'none';
//               }
//               for (let i = 0; i < 9; i++) {
//                 newsArray[i].style.display = 'block';
//               }
//               break;
//             case 2:
//                 for (let i = 0; i < newsArray.length; i++) {
//                     newsArray[i].style.display = 'none';
//                   }
//                   for (let i = 9; i < 18; i++) {
//                     newsArray[i].style.display = 'block';
//                   }
//               break;
//             case 10:
//                 for (let i = 0; i < newsArray.length; i++) {
//                     newsArray[i].style.display = 'none';
//                   }
//                   for (let i = 18; i < 27; i++) {
//                     newsArray[i].style.display = 'block';
//                   }
//               break;
//             default:
//               // Інші випадки
//               break;
//       }
//     };
//     });



// });

