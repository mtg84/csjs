const feline = {
    legs: 4,
    family: 'Felidae'
};

const canine = {
    family: 'Caninae',
    furry: true
};

const dog = {
    ...canine,
    isPet: true,
    adorable: true
};

const houseCat = {
    ...feline,
    isGrumpy: true,
    personality: 'unpredictable'
};

const catDog = {
    ...canine,
    ...feline
};

const tripod = {
    ...canine,
    legs: 3
};

const tripod2 = {
    legs: 3,
    ...canine
};

// we can use it to clone objects too
const catDogClone = {
    ...catDog
};

const random = [...'hello',{...catDog}];