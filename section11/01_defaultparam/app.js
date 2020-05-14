// The Old way
function multiplyOld (x,y){
    if(typeof y === "undefined"){
        y = 1
    }
    return x * y ;
}

// The New way
function multiplyNew (x,y = 1){
    return x * y ;
}

//Default parametes go at the end