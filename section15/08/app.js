const form = document.querySelector('#signup-form');

const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

form.addEventListener('submit', function(e) {
	e.preventDefault(); //stops the request from being sent (prevents page reload)
	console.log('cc', creditCardInput.value);
	console.log('terms', termsCheckbox.checked);
	console.log('veggieSelect', veggieSelect.value);
	//send form data to db
	//append something to page using form data
});

// Input and Change events are similar 
// input updates always
// change updates when hit enter or loses focus

const formData = {}
// {
// 	cc: '',
// 	terms: true,
// 	veggie: ''
// }

for(let input of [creditCardInput,termsCheckbox,veggieSelect]){
	input.addEventListener('input', ({target}) => {
		const {name,type,value,checked} = target;
		formData[name] = type === 'checkbox' ? checked : value;
	});
}

// creditCardInput.addEventListener('input', (e) => {
// 	console.log('CC changed',e);
// 	formData['cc'] = e.target.value;
// });

// veggieSelect.addEventListener('input', (e) => {
// 	console.log('Veggie changed', e)
// 	formData['veggie'] = e.target.value;
// });

// termsCheckbox.addEventListener('input', (e) => {
// 	console.log('terms changed', e);
// 	formData['terms'] = e.target.checked;
// });