// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

function isValidPassword(password, username) {
	if (password.length >= 8 && password.indexOf(' ') === -1 && password.indexOf(username) === -1) {
		return true;
	}
	return false;
}

function isValidPasswordColt(password, username) {
	if (password.length < 8) {
		return false;
	}

	if (password.indexOf(' ') !== -1) {
		return false;
	}

	if (password.indexOf(username) !== -1) {
		return false;
	}

	return true;
}

// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

function avg(arr) {
	let total = 0;

	for (let num of arr) {
		total += num;
	}

	return total / arr.length;
}

// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

//isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

function isPangram(sentence) {
	for (let l of 'abcdefghijklmnopqrstuvwxyz ') {
		if (sentence.toLowerCase().indexOf(l) === -1) {
			return false;
		}
	}

	return true;
}

function isPangramColt(sentence) {
	let loweCased = sentence.toLowerCase();

	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
		if (!loweCased.includes(char)) {
			return false;
		}
	}

	return true;
}

// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

//return random element from arrat
function pick(arr){
    let idx =  Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function getCard() {
    const values = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A' ];  
    const suits = ['clubs','spades', 'hearts', 'diamonds'];
    
    const card = {
		value: pick(values),
		suit: pick(suits)
	};
   
    return card;
}
