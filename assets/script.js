// Color Flipper
// Need to define a variable for the button so I can target it
var buttonSelector = document.getElementById('btn');
var color = document.querySelector('.color');
//Make an array of simple colors 
var simpleColors = ["Green", "Red", "#f15025", "rgba(133,122,200)"];
//Make an array of numbers to make a hex code
var hexNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];




btn.addEventListener('click', function () {
    var randomArrayNumber = randomNumber();
   document.body.style.backgroundColor = simpleColors[randomArrayNumber];
   color.textContent = simpleColors[randomArrayNumber];
});

function randomNumber () {
    return Math.floor(Math.random () * simpleColors.length); 
}