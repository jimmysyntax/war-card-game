// Suits
const suits = ['spades', 'hearts', 'diamonds', 'clubs'];
// Values
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

class Deck {
  constructor() {
    this.deck = [];
    this.discard = [];
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
        let card = { suit: suits[i], value: values[j] }
        this.deck.push(card)
      }
    }
  }

  shuffleDeck() {
    this.deck.sort((a, b) => 0.5 - Math.random());
  }

  nextCard() {
    return this.deck.pop();
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.wonDeck = []; 
  }
}

class Game {
  constructor(players) {
    this.players = players;
    this.gameDeck = new Deck();
    
  }

  /* 
  const occurences = [1, 2];
  const playedCards = [3, 7, 7];
  const maxValueCard = 7

  findMaxValue(arr, max) {
    let idx = playedCards.indexOf(maxValueCard);
    while (idx != -1) {
      occurences.push(idx);
      idx = playedCards.indexOf(maxValueCard, idx + 1);
    }
  }
  findMaxValue(playedCards, maxValueCard)
  */

  play() { 
    let deckLen = this.gameDeck.deck.length, playedCards = [];
    // Hand out all the cards to players
    for (let i = 0; i < deckLen; i++) {
      this.players[i % this.players.length].hand.push(this.gameDeck.deck[i])
    }

    // 
  }
}

class Lobby {
  constructor() {
    this.players = [];
  }

  addPlayer(player) {
    this.players.push(player)
  }
}

let newDeck = new Deck();
newDeck.shuffleDeck();
console.log(newDeck.deck);

console.log(newDeck.nextCard())
console.log(newDeck.nextCard())

let playerOne = new Player("Jimmy");
let playerTwo = new Player("Matt");
let playerThree = new Player("Nate");

let playerArray = [playerOne, playerTwo, playerThree];
let newGame = new Game(playerArray)
newGame.play()

console.log(playerOne);
console.log(playerTwo);
console.log(playerThree);



// let playerOne = [];
// let playerTwo = [];

// // Hand out card to the number of players playing the game
// const dealDeck = (shufDeck) => {
//   let len = shufDeck.length;
//   for (let i = 0; i < len; i++) {
//     let card = shufDeck.pop();
//     if (i % 2 === 0) {
//       playerOne.push(card)
//     } else {
//       playerTwo.push(card)
//     }
//   }
// }

// // On Start Game
// const startGame = () => {
//   // let newDeck = getDeck();
//   let shuffledDeck = shuffleDeck(newDeck);
//   dealDeck(shuffledDeck)

//   while (playerOne.length !== 0 && playerTwo.length !== 0) {
//     // Need a pile for each player to put winning hands

//     // Each player places a card down

//     // If player one's card is great
//     // if(playerOne.shift() > playerTwo.shift()) {
//     //     playerOne.push(playerTwo.shift())
//     // }else if (playerOne.shift() <)playerTwo.shift()
      
//     // {}
//     // If player two's card is greater
//     // If player two's card is greater

//     // If player one and player two card is the same
    
//   }

//   if (playerOne.length === 0) {
//     console.log("Player Two Wins!!")
//   } else {
//     console.log("Player One Wins!")
//   }
// }

// startGame()