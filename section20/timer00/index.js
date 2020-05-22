class Timer {
    
    constructor(durationInput, startButton, pauseButton){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
        this.durationInput.addEventListener('change', this.onDurationChange);
    }

    start(){
        console.log('Start', this)
    }

    pause(){
        console.log('Pause', this);
    }

    onDurationChange() {
        console.log('Change',this);
    }

    tick(){}
}


const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')

const t1 = new Timer(durationInput, startButton, pauseButton);
t1.start();