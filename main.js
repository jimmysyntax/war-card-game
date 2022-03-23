// Suits
const suits = ['spades', 'hearts', 'diamonds', 'clubs'];
// Values
const values = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];

const getDeck = () => {
  let deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      let card = { suit: suits[i], value: values[j] }
      deck.push(card)
    }
  }
  return deck;
}

const shuffleDeck = (deck) => {
  return deck.sort((a, b) => 0.5 - Math.random());
}

let playerOne = [];
let playerTwo = [];

// Hand out card to the number of players playing the game
const dealDeck = (shufDeck) => {
  let len = shufDeck.length;
  for (let i = 0; i < len; i++) {
    let card = shufDeck.pop();
    if (i % 2 === 0) {
      playerOne.push(card)
    } else {
      playerTwo.push(card)
    }
  }
}

// On Start Game
const startGame = () => {
  let newDeck = getDeck();
  let shuffledDeck = shuffleDeck(newDeck);
  dealDeck(shuffledDeck)

  while (playerOne.length !== 0 && playerTwo.length !== 0) {
    // Need a pile for each player to put winning hands

    // Each player places a card down

    // If player one's card is great

    // If player two's card is greater

    // If player one and player two card is the same
    
  }

  if (playerOne.length === 0) {
    console.log("Player Two Wins!!")
  } else {
    console.log("Player One Wins!")
  }
}

startGame()