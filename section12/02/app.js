const role = 'host';
const person = 'Jools Holland';

const role2 = 'director';
const person2 = 'James Cameron';

// Computed properties old way (we want a dynamic key so we can NOT use dot notation)
// const team = {};
// team[role] = person;
// team[role2] = person2;

// console.log(team);

// The new way with computed properties
const team = {
    [role] : person,
    [role2]: person2,
    [1 + 6 + 9]: 'sixteen'
};

console.log(team);


const addProp = (obj, k, v) => {
    return{
        ...obj,
        [k]: v
    }
}

const res = addProp(team, 'happy', ':)');

console.log(res);