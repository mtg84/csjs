const nums = [20,21,22,23,24,25,26,27];

// nums.forEach(function(num){
//     console.log(num*3);
// });

function printTriple(n){
    console.log(n*3);
}

nums.forEach(printTriple);
//printTriple(20)
//printTriple(21)
//printTriple(22)
//...

nums.forEach(function(num,idx){
    console.log(`number in index ${idx} is ${num}`);
});