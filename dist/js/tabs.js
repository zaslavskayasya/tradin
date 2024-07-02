let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
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
//# sourceMappingURL=tabs.js.map