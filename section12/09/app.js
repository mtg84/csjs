//Pure function approach
// function makeDeck() {
//     const deck = [];
//     const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
//     const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';

//     for(let value of values.split(',')){
//         for(let suit of suits){
//             deck.push({
//                 value,
//                 suit
//             });
//         }
//     }

//     return deck;
// }

// We will have to keep passing the deck to each function
// function drawCard(deck){
//     return deck.pop();
// }

// Better approach
const myDeck = {
	deck: [],
	drawnCards: [],
	suits: [ 'hearts', 'diamonds', 'spades', 'clubs' ],
	values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
	init() {
		const { suits, values, deck } = this;
		for (let value of values.split(',')) {
			for (let suit of suits) {
				deck.push({
					value,
					suit
				});
			}
		}
	},
	drawCard() {
		const drawn = this.deck.pop();
		this.drawnCards.push(drawn);
		return drawn;
	},
	drawMultiple(numCards) {
		const cards = [];
		for (let i = 0; i < numCards; i++) {
			cards.push(this.drawCard());
		}
		return cards;
	},
	shuffle() {
		const { deck } = this;
		// loop over array backwards
		for (let i = deck.length - 1; i > 0; i--) {
			// pick random index before current element
			let j = Math.floor(Math.random() * (i + 1));
			//swap
			[ deck[i], deck[j] ] = [ deck[j], deck[i] ];
		}
	}
};

myDeck.init();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);

// function shuffle(arr){
//     // loop over array backwards
//     for(let i = arr.length - 1; i > 0; i--) {
//         // pick random index before current element
//         let j = Math.floor(Math.random() * (i+1));
//         //swap
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//         console.log(arr);
//     }
// }
