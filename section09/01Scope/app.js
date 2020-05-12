// Function Scope
let bird = 'mandarin duck';

function birdWatch() {
	let bird = 'golden pheasant';
	console.log(`Inside the function bird ${bird}`);
}

birdWatch(); //golden pheasant
console.log(`Outside the function scope bird ${bird}`); // mandarin duck

// Block Scope
if (true) {
	let animal = 'eel';
	console.log(`Inside the block scope animal ${animal} `);
}

//console.log(`Outside the block scope ${animal}` );

// Lexical Scope
function outer() {
	let movie = 'Amadeus';

	function inner() {
		//let movie = 'the shining';
		console.log(movie.toUpperCase());

		function extraInner() {
			console.log(movie.toUpperCase());
		}

		extraInner();
	}

	inner();
}

outer();

// Function Expressions
// In js functions are objects
function add1(x, y) {
	return x + y;
}

const sum = function (x,y) {
    return x + y;
}

console.dir(sum);

const product = function multiply (x,y){
    return x * y;
}

// Higher Order Functions
// by adding a function to an object we are creating a method
function add(x, y) {
    return x + y;
  }
  
  const subtract = function (x, y) {
    return x - y;
  }
  
  function multiply(x, y) {
    return x * y;
  }
  
  const divide = function (x, y) {
    return x / y;
  }
  
  //We can store functions in an array!
  const operations = [add, subtract, multiply, divide];
  
  //Loop over all the functions in operations
  for (let func of operations) {
    let result = func(30, 5); //execute func!
    console.log(result);
  }
  
  // We can also store functions in objects!
  const thing = {
    doSomething: multiply
  }
  thing.doSomething(4, 5) //20


  //Functions as Arguments
  function callTwice(func){
    console.log(1); 
    func();
    console.log(2);
    func();
  }

  function laugh(){
      console.log('HAHAHAHAHAHAHHAHAHAHAHAH!')
  }

  function rage(){
      console.log('HATEEEEEEEE!!')
  }

  callTwice(laugh)

  function repeatNTimes(action, number){
      for(let i = 0; i <number; i++){
        action();
      }
  }

  repeatNTimes(rage,3);

  function pickOne(f1,f2){
      let rand = Math.random();
      console.log(`rand ${rand}`);
      if(rand<0.5){
          f1();
      }
      else{
          f2();
      }
  }

  pickOne(laugh,rage);