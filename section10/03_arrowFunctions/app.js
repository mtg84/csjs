// Typical syntax
// const square = function(x) {
// 	return x * x;
// };

// Arrow Function syntax
const square = (x) => {
	return x * x;
};

const isEven = (num) => {
	return num % 2 === 0;
};

const multiply = (x, y) => {
	return x * y;
};

//parens are optional if there is only one parameter
const square2 = (x) => {
	return x * x;
};

// use empty parens for functions with no parameters
const singSong = () => {
	return 'LALALALALALA';
};

// implicit return
const square3 = n => n * n;

const square4 = n => (
    n * n
)

const nums = [1,2,3,4,5,6,7,8];

const doubles1 = nums.map(function(num){
    return num * 2;
});

const doubles2 = nums.map( n => {
    return n * 2;
});

const doubles3 = nums.map(n => n * 2);

