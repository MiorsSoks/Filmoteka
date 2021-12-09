import axios from 'axios';

export async function fetchCollection() {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/trending/all/day?api_key=3b94c1b54af7d429587ecf26a37007c0',
      );
  
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }