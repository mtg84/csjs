// The old way
const raceResults = [
    'Eliud',
    'Feyisa',
    'Galen',
    'Ghirmay',
    'Alphonce',
    'Jared'
];

// const gold = raceResults[0];
// const silver = raceResults[1];
// const bronze =  raceResults[2];

// The new way (order matters)
const [gold, silver, bronze] = raceResults;

console.log('gold',gold);
console.log('silver',silver);
console.log('bronze',bronze);

//skipping elements
const [first,,,fourth] = raceResults;
console.log('first', first);
console.log('fourth', fourth);

const [winner, ...others] = raceResults;