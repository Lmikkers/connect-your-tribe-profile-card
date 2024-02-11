// let card = document.querySelector('.cardContainer')
const buttons = document.querySelectorAll('button');
const cardContainer = document.getElementById('cardContainer');


buttons.forEach(function(buttonTurn) {
  buttonTurn.addEventListener('click', turn);
});

function turn() {
  console.log('toggle card');
  cardContainer.classList.toggle('turned');
}

