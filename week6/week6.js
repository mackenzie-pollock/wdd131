// arrays.js
const steps = ["one", "two", "three"];

function listTemplate(steps) {
    return '<li>${steps}</li>';
}

const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join('');

// let grades = ['A', 'B', 'A', 'C'];

// let gpaPoints = grades.map(funtion(grade)) {
//     switch (grade){ 
//         case 'A':
//             point = 4;
//             break;
//         case 'B':
//             point = 3;
//             break;
//         case 'C'
//             point = 2;
//             break;
//         case 'D':
//             point = 1;
//             break;
//         case 'F':
//             point = 0;
//         default:
//             alert('Not a valid grade');
//     }
//     return point;


// }

// console.log(gpaPoints);

// let totalPoints = gpaPoints.reduce(getTotal);

// function getTotal(total, item){
//     return total + item;
// }
// console.log(totalPoint);

let gpaAverage = totalPoint/gpaPoints.length;
console.log(gpaAverage);


let fruit = ['watermelon', 'peach', 'apple', 'tomato', 'grape']


// more efficient way to type function
let shortFruit = fruit.filter((item)=> item.length < 6);

console.log(shortFruit)

const myArray = [12, 21, 54, 33]

let luckyNumber = 54;

let luckyIndex = myArray.indexOf(luckyNumber);
console.log(luckyIndex);