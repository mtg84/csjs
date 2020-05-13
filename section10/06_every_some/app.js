

const words = ['dog', 'dig', 'log', 'bag', 'wag'];

// every
const all3Letters = words.every(word => word.length === 3);

const allEndsInG = words.every( word => {
	const last = word.length-1;
	return word[last] === 'g';
});

// some
const someStartWithD = words.some(word => word[0] === 'd');


