function viewerTemplate(imgSrc, altText) {
  return `
    <div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${imgSrc}" alt="${altText}">
    </div>
  `;
}

function viewHandler(event) {
  const clickedImg = event.target;

  // Ensure the clicked element is an image inside the gallery
  if (!clickedImg.closest(".gallery img")) return;

  // Prevent multiple modals from opening
  if (document.querySelector(".viewer")) return;

  // Get the full-size image by modifying the filename
  const imgParts = clickedImg.src.split("-"); 
  if (imgParts.length < 2) return; // Prevent errors if filename is unexpected
  
  const imgSrc = imgParts[0] + "-full.jpeg"; 
  const altText = clickedImg.alt;

  // Insert modal viewer at the beginning of body
  document.body.insertAdjacentHTML("afterbegin", viewerTemplate(imgSrc, altText));

  // Add event listener to close button
  document.querySelector(".close-viewer").addEventListener("click", closeViewer);
}

function closeViewer() {
  document.querySelector(".viewer").remove();
}

// Attach event listener to .gallery
document.querySelector(".gallery").addEventListener("click", viewHandler);
