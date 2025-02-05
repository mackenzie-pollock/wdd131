function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
  
document.getElementById("menu-button").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
});
//not finished with picture expansion, but this will add aria to make more accessible
function viewerTemplate(path, text){
  <div class="viewer" aria-modal="true" role='dialog'>
  <button class="close-viewer">X</button>

}



function handleResize() {
  const menu = document.getElementById("menu");
  if(window.innerWidth > 1000) {
    menu.classList.remove("hidden");
  } else{
    menu.classList.add("hidden");
  }
}
    
window.addEventListener("resize", handleResize);
handleResize();

document.getElementById("menu-button").addEventListener("click", function () {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
  menu.classList.toggle("hidden");
});

//the following events are for user friendliness and accessibility
window.addEventListener("click", function (event) {
  let modal = document.querySelector('.viewer');
  // close the modal when user clicks outside of the image
  if (event.target === modal) {
  modal.remove();
  }
  });
  
  // allow the escape key to close the modal as well
  window.addEventListener("keydown", function (event) {
  let modal = document.querySelector('.viewer');
  if (event.key === "Escape") {
  modal.remove();
  }
  });