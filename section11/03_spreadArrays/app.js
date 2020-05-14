const cephalopods = ['dumbo octopus', 'humboldt', 'flamboyant'];

const gastropods  = ['snail', 'slug', 'neon slug'];

const cnidaria = ['coral', 'yelly'];

const mollusca = [...cephalopods, ...gastropods];

const inverts = [...cnidaria, ...gastropods, ...cephalopods];

const cepCopy = [...cephalopods];
