
//Declare variables for each card and assign the value of "Queen" to two cards and "King" to the other two cards


const cards = ["queen", "queen", "king", "king"];

//Array to hold the cards in play

const cardsInPlay = [];

let cardOne = cards[2];

cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);

let cardTwo = cards[3];

cardsInPlay.push(cardTwo);

console.log("User flipped " + cardTwo);

//Check to see that two cards have been flipped

if(cardsInPlay.length === 2) {
	if(cardsInPlay[0] === cardsInPlay [1]) {
	alert("You found a match!");
} else {alert("Sorry, try again.")
}};