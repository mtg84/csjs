// CALLBACKS
/*
    A callback function is a function 
    passed into another function as an argument,
    which is then invoked inside the outer function
*/

// function grumpus(){
//     alert('GAH GO AWAY');
// }

// setTimeout(grumpus,5000);

// setTimeout(function(){
//     alert('WELCOME');
// },5000);

const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    alert('WHY DID YOU CLICK ME!!?');
});


// HOISTING
// variables declaration with let and const are not hoisted (unlike with var)
// functions are hoisted
// functions expression are not hoisted