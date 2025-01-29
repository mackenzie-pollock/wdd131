let img = document.querySelector('img');
let filename = img.getAttribute('src');
console.log(filename);

/* .split method */

let parts = filename.split('-');
console.log("img" + parts[1]);

/* .instertAdjacentHTMl method */
let newpara = "<p> This is a new paragraph </p>";

img.insertAdjacentHTML('afterbegin', newPara);

/* resize event*/

function handleResize() {
if (window.innerWidth > 1000){
    img.style.border="3px solid tan";
}

}