const results = [{
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
  },
  {
    first: 'Feyisa',
    last: 'Lilesa',
    country: 'Ethiopia'
  },
  {
    first: 'Galen',
    last: 'Rupp',
    country: 'United States'
  }
];

// I wnat the country of the silver winner
const [,{country}] = results;
console.log('country',country);

// // NESTED DESTRUCTURING
// const [{
//   first: goldWinner
// }, {
//   country
// }] = results;

// goldWinner; //"Eliud"
// country; //"Ethiopia"