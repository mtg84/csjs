// Short hand to add methos to an object

const auth = {
    username: 'TomBot',
    login() {
        console.log('LOGGED YOU IN!');
    },
    logout() {
        console.log('LOGGED YOU OUT!');
    }

};

console.log(auth);