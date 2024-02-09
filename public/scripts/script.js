// var element = document.getElementById("card");
// var button = document.querySelectorAll("button");



// function turn() {
//     element.classList.toggle("turned");
//   }

var card = document.querySelector('.cardContainer')
var button = document.querySelector('button');

var buttons = document.querySelectorAll('button');

// button.addEventListener('click', turn);

function turn() {
    console.log('toggle card');
    card.classList.toggle('turned');
}

buttons.forEach(function(buttonTurn) {
  buttonTurn.addEventListener('click', turn);
});
