const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey:'cf9e1725',
            s: 'avengers'
        }
    });
    console.log(response.data)
};

fetchData();