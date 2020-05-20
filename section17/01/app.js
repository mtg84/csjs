const firstReq = new XMLHttpRequest();

firstReq.addEventListener('load', function() {
	console.log('IT WORKED!!!');
	console.log('text', this.responseText)
	const data = JSON.parse(this.responseText);
	console.log('data',data);

	const filmUrl = data.results[0].films[0];
	const filmRequest = new XMLHttpRequest();
	filmRequest.addEventListener('load', function(){
		const filmData = JSON.parse(this.responseText);
		console.log('filmData',filmData);
	});
	filmRequest.addEventListener('error', function(e){
		console.log('Error', e);
	});

	filmRequest.open('GET', filmUrl);
	filmRequest.send();


	// for (let planet of data.results) {
	// 	console.log(planet.name);
	// }
});

firstReq.addEventListener('error', () => {
	console.log('ERROR!!!!!!');
});

firstReq.open('GET', 'https://swapi.dev/api/planets/');
firstReq.send();
console.log('Request Sent!');
