const img = document.getElementById('bear-photo');
console.log(img);

const inputs = document.getElementsByTagName('input');
for(let input of inputs){
    console.log(input.value);
}

const specialLis = document.getElementsByClassName('special');
console.log(specialLis);

//query selector    => we pass in a CSS selector

document.querySelector('h1');
document.querySelector('#bear-photo');
document.querySelectorAll('.special');  //we get a node list instead an HTMLCollection
