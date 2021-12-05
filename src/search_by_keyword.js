import axios from 'axios';

export async function fetchMovie(value) {
    try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3b94c1b54af7d429587ecf26a37007c0&language=en-US&query=${value}&page=1&include_adult=false`);
     
    console.log(response.data);
    return response.data;
    } catch (error) {
      console.error(error);
    }        
      };
