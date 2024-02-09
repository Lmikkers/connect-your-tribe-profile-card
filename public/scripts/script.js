var card = document.querySelector('.cardContainer')
var button = document.querySelector('button');

var buttons = document.querySelectorAll('button');


function turn() {
    console.log('toggle card');
    card.classList.toggle('turned');
}

buttons.forEach(function(buttonTurn) {
  buttonTurn.addEventListener('click', turn);
});
