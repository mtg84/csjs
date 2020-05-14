function sum (...nums){
    return nums.reduce((total, currVal) => {

        return total + currVal;

    });
}

console.log(sum(4,5,6,7)); //22


// rest parameter must be the last formal parameter
function fullName(first, last, ...titles){
    console.log('first', first);
    console.log('last', last);
    console.log('titles', titles);
}


fullName('Tom', 'jones', 'III', 'Order of the phoenix');

const multiply = (...nums) => {
    return nums.reduce((total,curVal) => total * curVal)
}

console.log(multiply(3,5,2));