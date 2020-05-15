const annoyer = {
    phrases: ['literally', 'cray, cray', 'I can not even', 'Totes!', 'YOLO', 'Can not stop, wont stop'],
    pickPhrase() {
        const {phrases} =  this; // destructuring
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx];
    },
    start() {
        this.timerId  = setInterval (() => {
            console.log(this.pickPhrase());
        }, 3000);
    },
    stop(){
        clearInterval(this.timerId);
        console.log('Thanks , thats over');
    }
}

//annoyer.start();
//annoyer.stop();