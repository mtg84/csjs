// The old way
function sum(){
    console.log(arguments);
    const argsArray = [...arguments]
    return argsArray.reduce((total, curVal) => {
        return total+ curVal;
    });
}

sum(1,2,3);