let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.parentNode.classList.toggle("active");
    // console.log(this.parentNode);
    // this.closest('.panel').classList.toggle('active');
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
        console.log(panel.scrollHeight);
        console.log(panel.scrollHeight+ 150);

      panel.style.maxHeight = panel.scrollHeight + 140 + "px";
    } 
  });
}




// let accI = document.getElementsByClassName("accordionI");
// let b;     

// for (b = 0; b < accI.length; b++) {
//   accI[b].addEventListener("click", function() {
//     this.parentNode.classList.toggle("active");
//     // console.log(this.parentNode);
//     // this.closest('.panel').classList.toggle('active');
//     let panelI = this.nextElementSibling;
//     if (panelI.style.maxHeight) {
//       panelI.style.maxHeight = null;
//     } else {
//         console.log(panelI.scrollHeight);
//         console.log(panelI.scrollHeight+ 150);

//       panelI.style.maxHeight = panelI.scrollHeight + 140 + "px";
//     } 
//   });
// }


let ac = document.getElementsByClassName("accordi");
let b;

for (b = 0; b < ac.length; b++) {
  ac[b].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.parentNode.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    let pane = this.nextElementSibling;
    if (pane.style.display.height === "auto") {
      pane.style.display.height = "0";
    } else {
      pane.style.display.height = "auto";
    }
  });
}



// .wrap-tab
//   .accordion.card-link
//   .panel.lists-wrap
// .wrap-tab
//   .accordion.card-link
//   .panel.lists-wrap