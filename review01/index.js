setTimeout( ()=>{
    
    console.log('5 segundos despues');

}, 5000);

setTimeout( function(){

    console.log('1 segundo despues');

}, 1000);

// Promise

// let firstPromise = new Promise ( function(resolve,reject) {

//     // do something

//     if( /* all cool*/) {

//         resolve(result);

//     }else{

//         reject(error);

//     }

// });