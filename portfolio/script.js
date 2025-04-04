function typeWriterEffect() {
    const textElement = document.getElementById('typewriter-text');
    const fullText = textElement.textContent;
    textElement.textContent = '';
    let index = 0;

    function type() {
        if (index < fullText.length) {
            textElement.textContent += fullText.charAt(index);
            index++;
            setTimeout(type, 35); // typing speed (ms)
        }
    }

    type();
}

window.addEventListener('load', () => {
    if (window.innerWidth > 768) {
        // Desktop: start on load
        typeWriterEffect();
    } else {
        // Mobile: animate when #intro is in view
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                typeWriterEffect();
                observer.disconnect(); // only run once
            }
        }, {
            threshold: 0.5
        });

        observer.observe(document.getElementById('intro'));
    }
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

