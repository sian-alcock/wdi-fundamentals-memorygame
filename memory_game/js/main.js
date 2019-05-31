
//Declare variables for each card and assign the value of "Queen" to two cards and "King" to the other two cards


const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];


function createBoard () {

	for (let i = 0; i < cards.length; i++) {

		// create a new image and store in cardElement
		
		const cardElement = document.createElement('img');

		// add a src attribute

		cardElement.setAttribute('src', "images/back.png");

		// set the card's data-id attribute to be the value of i

		cardElement.setAttribute('data-id', i);

		// add event listener on click of the card to run flipCard function

		cardElement.addEventListener('click', flipCard);

		// add cardElement to the Game board

		document.getElementById('game-board').appendChild(cardElement);

	}
};


//Array to hold the cards in play

const cardsInPlay = [];


//function to log which card is flipped and test for card equality

function flipCard() {

	const cardID = this.getAttribute('data-id');

//Log the card that was flipped to the console

console.log("User flipped " + cards[cardID].rank);
console.log("Suit: " + cards[cardID].suit);
console.log("Image: " + cards[cardID].cardImage)

//Push the card that was flipped into the cardsInPlay array

cardsInPlay.push(cards[cardID].rank);

	// show the card that has been flipped

this.setAttribute('src', cards[cardID].cardImage);

	//check two cards have been flipped

	if(cardsInPlay.length === 2) {


// call the checkformatch function

checkForMatch();

}
};

//function to check the two cards match

	//create global variable userScore to keep score

		let userScore = 0;


function checkForMatch () {


	//compare the cards and report whether they match or not
		
		if(cardsInPlay[0] === cardsInPlay [1]) {

	// Add 1 to the userScore

		userScore += 1;

	// Present alert advising that match is found

	alert("You found a match!");

} else {
	alert("Sorry, try again.")
}

keepScore();

};



// Call function to create the board

createBoard();


// function to reload the game

function keepScore () {
		
		let currentScore;

		//If user already has a score im the session

		if(sessionStorage.getItem("totalScore")) {

			 //Add the userScore (0 or 1) to the session score

			 currentScore = Number(sessionStorage.getItem("totalScore")) + userScore;

		} else {

			//Otherwise just use the userScore

			 currentScore = userScore;
		}

			//save the currentScore into the web session as "totalScore"

			 sessionStorage.setItem("totalScore", currentScore);

			//write score to HMTL
		
			document.getElementById('score').innerHTML = currentScore;
};

// when 'Start again!' button is clicked reload the page

document.getElementById('restart').addEventListener('click', reloadPage);

// function to reload the page
function reloadPage () {
	window.location.reload();
}

//call keepScore function again to keep score on the page after page has reloaded

keepScore()