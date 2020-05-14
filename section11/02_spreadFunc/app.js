function giveMeFour(a,b,c,d){
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
    console.log('d', d);
}

const colors = ['red','orange', 'yellow', 'green'];

giveMeFour(colors);

giveMeFour(...colors);

const str = 'GOAT';
giveMeFour(...str);