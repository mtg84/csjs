class Timer {
    
    constructor(durationInput, startButton, pauseButton, callbacks) {
        
        this.durationInput = durationInput;
		this.startButton = startButton;
        this.pauseButton = pauseButton;
        
        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete= callbacks.onComplete;
        }

		//With bind
		// this.startButton.addEventListener('click', this.start.bind(this));
		// without bind
		this.startButton.addEventListener('click', this.start);
		this.pauseButton.addEventListener('click', this.pause);
		this.durationInput.addEventListener('change', this.onDurationChange);
	}

	//with bind
	// start (){
	//     console.log('Start', this)
	//     this.importantMethodToCall();
	// }

    
    //without bind
	start = () => {
        console.log('eeeeeeeeee')
       if(this.durationInput.value==="0")return;
        if(this.onStart){ 
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.interval = setInterval(this.tick,50);
	};
    
    
    pause = () => {
        clearInterval(this.interval);
	}

    
    tick = () => { 
        if(this.timeRemaining <= 0){
            
            this.pause;
            
            if(this.onComplete){
                this.pause();
                console.log('done');
                this.onComplete();           
            }
        }
        else{
            this.timeRemaining = this.timeRemaining-.05;
            if(this.onTick){
                this.onTick(this.timeRemaining);
            }
        }
    };

    // Getters and setters

    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time){
        this.durationInput.value = time.toFixed("2");
    }


	onDurationChange() {
		console.log('Change', this);
	}


}