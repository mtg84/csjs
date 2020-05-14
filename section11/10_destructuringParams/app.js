const runner = {
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya',
    title: 'Elder of the order of the golden Heart of Kenya'
};

// function print(person){
//     const {
//         first, 
//         last, 
//         title
//     } = person;

//     console.log(`${first} ${last} ${title}`);
// }

// With Destructuring
function print({
    first, last, title
}) {
    console.log(`${first} ${last} ${title}`);
}

print(runner);


const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json'
];

function parseResponse([protocol,statusCode, contentTypy]) {
    console.log(`Status: ${statusCode}`);
}

parseResponse(response);