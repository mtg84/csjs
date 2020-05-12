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

  //Returning Functions (function factories)
  
  
  function multiplyBy(num){
    return function (x) {
      return x * num;
    }
  }
  
  const triple = multiplyBy(3);
  const double = multiplyBy(2);
  const halve =  multiplyBy(0.5);

  console.log('triple(5) = ' + triple(5)); //15
  console.log('double(8) = ' + double(8)); //16
  console.log('halve(8) = ' + halve(8)); //4



  function makeBetweenFunc (x,y){
    return function(num){
      if(num>=x && num <= y){
        return true
      }
      return false;
    }
  }

  const isChild = makeBetweenFunc(0,18);

  console.log(isChild(5)); // true
  console.log(isChild(19)); // false

  const isNineties = makeBetweenFunc(1990,2000);

  const isNiceWeather = makeBetweenFunc(60,79);