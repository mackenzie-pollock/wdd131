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
        
        typeWriterEffect();
    } else {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                typeWriterEffect();
                observer.disconnect();  
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





// contact page //

const emailCard = document.querySelector('a[href^="mailto:"]');
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

const text = "Let's Connect!";
let i = 0;

function typeText() {
  if (i < text.length) {
    document.getElementById("type-contact").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 100);
  }
}

typeText();



const burstColors = ["rgb(242 127 36)", "rgb(195 59 18)", "rgb(12 49 54)", "rgb(65 136 35)", "rgb(51 111 59)"];
const burstContainer = document.querySelector('.burst-blocks');

for (let i = 0; i < 18; i++) {
  const block = document.createElement('div');
  block.classList.add('burst-block');
  block.style.backgroundColor = burstColors[Math.floor(Math.random() * burstColors.length)];
  burstContainer.appendChild(block);

  block.addEventListener('click', () => {
    block.classList.add('clicked');
    setTimeout(() => block.remove(), 600);
  });
}

function createLeaf() {
  const leaf = document.createElement('div');
  leaf.classList.add('leaf');

  // Random horizontal start position
  leaf.style.left = `${Math.random() * 100}vw`;

  // Random animation duration and delay
  const duration = Math.random() * 5 + 5; // between 5–10s
  const delay = Math.random() * 5;
  leaf.style.animationDuration = `${duration}s`;
  leaf.style.animationDelay = `${delay}s`;

  document.querySelector('.leaf-container').appendChild(leaf);

  // Remove leaf after it finishes falling
  setTimeout(() => {
    leaf.remove();
  }, (duration + delay) * 1000);
}

// Generate new leaves every half second
setInterval(createLeaf, 500);
