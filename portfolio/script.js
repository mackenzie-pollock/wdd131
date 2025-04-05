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

/* projects page*/


const modal = document.getElementById('projectModal');
const closeModal = document.getElementById('closeModal');
const projectFrame = document.getElementById('projectFrame');


function openProjectModal(projectURL) {
  projectFrame.src = projectURL;
  modal.style.display = 'flex';
}


closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  projectFrame.src = ''; 
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    projectFrame.src = '';
  }
});



window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    projectFrame.src = '';
  }
});


// contact page //

const emailCard = document.querySelector('.contact-card.email');
emailCard.addEventListener('click', () => {
  navigator.clipboard.writeText('pollockmackenzie312@gmail.com');
  alert('Email copied to clipboard!');
});


document.querySelector('.resume-card').addEventListener('click', () => {
  openProjectModal('resume.pdf');

  setTimeout(() => {
    const toast = document.createElement('div');
    toast.innerText = '🎉 Resume ready to view!';
    toast.classList.add('toast');
    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 3000);
  }, 1000);
});

const text = "Let's Connect";
let i = 0;

function typeText() {
  if (i < text.length) {
    document.getElementById("type-contact").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 100);
  }
}

typeText();



const burstColors = ["#f28705", "#03a696", "#f25c54", "#ffcb05", "#a0e426"];
const burstContainer = document.querySelector('.burst-blocks');

for (let i = 0; i < 20; i++) {
  const block = document.createElement('div');
  block.classList.add('burst-block');
  block.style.backgroundColor = burstColors[Math.floor(Math.random() * burstColors.length)];
  burstContainer.appendChild(block);

  block.addEventListener('click', () => {
    block.classList.add('clicked');
    setTimeout(() => block.remove(), 600);
  });
}

