// All text from page
console.log(document.querySelector('body').innerText);

const h1 = document.querySelector('h1');
h1.innerText = "Buh";
console.log(h1.textContent);

// innerText shows what it shows on the page
// textContent shows all the text in the element

console.log(document.querySelector('#main').innerText);
console.log(document.querySelector('#main').textContent);

// innerHTML 
const form = document.querySelector('form');
console.log(form.innerHTML);
form.innerHTML+= '<b> I am a bold tag</b>'
console.log(form.innerHTML);

//value
const inputs = document.querySelectorAll('input');
inputs[0].value = 'Taco';
inputs[1].placeholder = 'Password please';
console.log(inputs[2].value);
inputs[2].checked = true;

//href
const a  = document.querySelector('a');
console.log(a.href);
const img = document.querySelector('img');
console.log(img.src );
img.src = 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'

//getAttribute & setAttribute
const range = document.querySelector('input[type="range"]');
console.log(range.getAttribute('max'));
console.log(range.getAttribute('min'));
console.log(range.getAttribute('type'));
range.setAttribute('min', '-500');
range.setAttribute('type', 'radio');

//Parent 
const firstLI = document.querySelector('.special');
console.log(firstLI.parentElement); //ul

// Children
const ul = document.querySelector('ul');
console.log(ul.children);

//Sibling
const secondLI = firstLI.nextElementSibling;
console.log(firstLI.nextElementSibling);
secondLI.innerText = 'nextElementSibling'
const thirdLI = firstLI.nextElementSibling.nextElementSibling;
thirdLI.innerText = '3rd li'
console.log(thirdLI.previousElementSibling); //secondLI

// Changing multiple elements 
const allLis = document.querySelectorAll('li');
const colors = ['red','orange','blue'];
for(let i = 0; i < allLis.length; i++){
    //allLis[i].innerHTML = "We are <b> li </b>";
    allLis[i].style.color = colors[i];
}

//Changing styles
h1.style.color = 'blue';
h1.style.backgroundColor = 'teal';

// getComputedStyle
const style = getComputedStyle(h1);
console.log('getComputedStyle',style);

// manipulating classes
const todos = document.querySelector('#todos .todo');
console.log('classLIst',todos.classList);
todos.classList.add('done');
todos.classList.remove('done');
todos.classList.toggle('done');

// Creating elements
const newh2 = document.createElement('h2');
newh2.innerText = 'I like anunaks';
newh2.classList.add('special');

//appendChild
const section = document.querySelector('section');
section.appendChild(newh2);

const newImg = document.createElement('img');
newImg.src = 'https://images.unsplash.com/photo-1588955817005-889bd17c4e86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80';
newImg.style.width ='300px';
document.body.appendChild(newImg);

//insertBefore
const theFirstLi = document.querySelector('li');
const newLI = document.createElement('li');
newLI.innerText = 'an inserted before new li';
ul.insertBefore(newLI, theFirstLi);


//insertAdjacent
const i = document.createElement('i');
i.innerText = 'I am italics';

const b = document.createElement('b');
b.innerText = 'I am bold';

const firstP = document.querySelector('p');

firstP.insertAdjacentElement('beforebegin',i);
firstP.insertAdjacentElement('afterend',i);
firstP.insertAdjacentElement('beforeend',i);
firstP.insertAdjacentElement('afterbegin',i);

firstP.append('<b>element appended</b>', b);
firstP.prepend('<b>element prepended</b>',b);

//removeChild
const sectionUL = document.querySelector('section ul');
const removeMe = sectionUL.querySelector('.special');
sectionUL.removeChild(removeMe);

sectionUL.remove();