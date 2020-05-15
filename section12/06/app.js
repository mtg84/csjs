function hi() {
    console.log('HI');
    console.log(this);
}

const person = {

    first: 'Cherry',
    last: 'Weird',
    nickname: 'Cher',
    fullname() {
        //destructuring
        const {
            first,
            last,
            nickname
        } = this;
        return(`${first} ${last} aka ${nickname}`);
    },
    printBio() {
       const fullname = this.fullname();
       console.log(`${fullname} is a  person`);
    }
};