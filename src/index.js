// import { calculatorAdd } from "./components/calculator.js";
import $ from "jquery";

// console.log(calculatorAdd(5, 10));

// console.log(calculatorAdd(15, 50));

console.log(555);
console.log(777);
console.log(888);
console.log(999);

// const box = document.querySelector(".box");
const box = $(".box");

console.log(box);

// box.css('backgroundColor', 'blue');

box.css({
    'background-color': 'blue',
    'border-radius': '15px'
});

setInterval(() => {
    box.toggleClass('second');
}, 2000);


$('.box').animate({
    opacity: 0.25,
    left: '+=500',
}, 5000, () => console.log("finish"));

