/**
 *  * Learn JavaScript by Building 7 Games - Game 2nd
 * https://www.youtube.com/watch?v=ec8vSKJuZTk&t=1122s
 */
const cardArray = [
  {
    name: "fries",
    img: 'images/fries.png'
  },
  {
    name: "cheeseburger",
    img: 'images/cheeseburger.png'
  },
  {
    name: "hotdog",
    img: 'images/hotdog.png'
  },
  {
    name: "ice-cream",
    img: 'images/ice-cream.png'
  },
  {
    name: "milkshake",
    img: 'images/milkshake.png'
  },
  {
    name: "pizza",
    img: 'images/pizza.png'
  },
  {
    name: "fries",
    img: 'images/fries.png'
  },
  {
    name: "cheeseburger",
    img: 'images/cheeseburger.png'
  },
  {
    name: "hotdog",
    img: 'images/hotdog.png'
  },
  {
    name: "ice-cream",
    img: 'images/ice-cream.png'
  },
  {
    name: "milkshake",
    img: 'images/milkshake.png'
  },
  {
    name: "pizza",
    img: 'images/pizza.png'
  },

];

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
const messageDisplay = document.querySelector('#message');

let cardsChosen = [];
let  cardsChosenId = [];
const cardsWon = [];

// desordena el Array
cardArray.sort(() => 0.5 - Math.random());

function createBoard () {
  for(let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'images/blank.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card);
  }
}

createBoard()

function checkMatch() {
  const cards = document.querySelectorAll('img');
  const optionOneId =  cardsChosenId[0];
  const optionTwoId =  cardsChosenId[1];

  if(optionOneId === optionTwoId){
    messageDisplay.textContent = 'Clickeaste en la misma imagen';
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
  } else if(cardsChosen[0] == cardsChosen[1]) {
    messageDisplay.textContent = 'Great! You found a match!';   
    cards[optionOneId].setAttribute('src', 'images/white.png');
    cards[optionTwoId].setAttribute('src', 'images/white.png');
    cards[optionOneId].removeEventListener('click', flipCard);
    cards[optionTwoId].removeEventListener('click', flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    messageDisplay.textContent = 'Sorry, try again please';
  }
  resultDisplay.textContent = cardsWon.length===null?0:cardsWon.length;
  cardsChosen = [];
  cardsChosenId = [];
  if(cardsWon.length === cardArray.length/2){
    resultDisplay.textContent = "Ends Game";
    messageDisplay.textContent = '';
  }
  setTimeout(()=>{    
    messageDisplay.textContent = '';
  }, 500)
}

function flipCard() {
  let cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute('src', cardArray[cardId].img);
  if(cardsChosen.length === 2){
    setTimeout(checkMatch, 500);
  }
}