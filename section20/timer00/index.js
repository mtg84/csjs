const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const circle = document.querySelector('.dial circle');
const movingCircle = document.querySelector('.moving circle');
const perimeter = circle.getAttribute('r') * 2 * Math.PI;

movingCircle.setAttribute('stroke-dasharray', perimeter);

let currentOffset = 0;
let duration;

const t1 = new Timer(durationInput, startButton, pauseButton, {
	onStart(totalDuration) {
        console.log('Timer has Started');
		duration = totalDuration;
	},

	onTick(timeRemaining) {
		console.log('Timer just ticked down');
		movingCircle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter);
	
	},

	onComplete() {
        const audio = document.querySelector('audio');
        audio.play();
	}
});

//t1.start();

// const printThis = function (){
//     console.log(this);
// }

// printThis.call({color:'red'});
// printThis.bind({color:'red'});
// printThis.apply({color:'red'});

// printThis();

// const colors = {
//     printColor(){
//         console.log(this);
//     }
// };

// colors.printColor();

// const randomObject = {
//     a:1
// };

// randomObject.printColor = colors.printColor;

// randomObject.printColor();
