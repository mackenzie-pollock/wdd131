const text = "Hey, my name is Mackenzie Pollock. I am passionate about living life to the fullest, and learning new things! As I am studying software engineering I have completed a few projects that I have listed here on my portfolio.";
const speed = 100;
let index = 0;

function typeWriter() {
  const target = document.getElementById("typewriter");
  if (index < text.length) {
    target.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

// Wait for the DOM to load before starting
window.addEventListener("DOMContentLoaded", typeWriter);
