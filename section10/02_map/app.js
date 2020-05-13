const numbers = [20,21,22,23,24,25,26,27];

const words = ['asap', 'byob', 'rsvp', 'diy'];

const doubles = numbers.map(function(num){
    return num*2;
});

const numDetail = numbers.map(function(n){
    return {
        value:n,
        isEven: n%2 ===0
    }
});

const abb = words.map(function(word){
    return word.toUpperCase().split('').join('.');
});