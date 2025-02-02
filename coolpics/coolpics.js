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
