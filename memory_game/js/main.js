
//Declare variables for each card and assign the value of "Queen" to two cards and "King" to the other two cards


const cards = ["queen", "queen", "king", "king"];

//Array to hold the cards in play

const cardsInPlay = [];

//function to check the two cards match

function checkForMatch () {
	if(cardsInPlay.length === 2) {
		if(cardsInPlay[0] === cardsInPlay [1]) {
	console.log("You found a match!");
} else {
	console.log("Sorry, try again.")
}
} 
};

//function to log which card is flipped and test for card equality

function flipCard(cardID) {

//Log the card that was flipped to the console

console.log("User flipped "+cards[cardID]);

//Push the card that was flipped into the cardsInPlay array

cardsInPlay.push(cards[cardID]);

// call the checkformatch function

checkForMatch();

};

// Check function

flipCard(0);
flipCard(2);


