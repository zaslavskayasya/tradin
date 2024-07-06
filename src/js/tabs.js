let accordions = document.querySelectorAll('.accordion');
accordions?.forEach(accordion => {
  accordion.addEventListener('click', () => {
    let parentTop = accordion.closest('.panel, .wrap-tab');
    let parent = accordion.parentElement;
    let panel = accordion.nextElementSibling;
    
    let classListParent = parent.classList;
    let classListPanel = panel.classList;
    
    classListPanel.toggle('active');
    classListParent.toggle('active');

    if (classListParent.contains('active')){
      if (parent === parentTop){
        panel.style.height = `${panel.scrollHeight}px`;
      } else {
        panel.style.height = `${panel.scrollHeight}px`;
        parentTop.style.height = `${parseInt(parentTop.style.height) + panel.scrollHeight}px`;
      }
    } else {
      if (parent === parentTop){
        panel.style.height = null;
      } else {
        parentTop.style.height = `${parseInt(parentTop.style.height) - panel.scrollHeight}px`;
        panel.style.height = null;
      }
    }
  });
});