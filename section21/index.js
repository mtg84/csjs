const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey:'cf9e1725',
            s: searchTerm,  // movie title search
            //i: 'tt0848228' //specific movie
        }
    });
    console.log(response.data)
};

//fetchData();

const input = document.querySelector('input');

//the event input in the input 
input.addEventListener('input', (event) => {
    fetchData(event.target.value);
});