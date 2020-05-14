const runner = {
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya',
    title: 'Elder of the order of the golden Heart of Kenya'
};

const { 
    first, 
    last,
    country: nation,
    title: honorific
} = runner;

console.log('first', first);
console.log('last', last);
console.log('nation', nation);
console.log('honorific', honorific);

// const {
//     first,
//     last,
//     ...other
// } = runner;

// console.log('first', first);
// console.log('last', last);
// console.log('other', other);