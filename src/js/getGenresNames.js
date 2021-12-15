import axios from 'axios';
const API_KEY = '3b94c1b54af7d429587ecf26a37007c0';

export async function getGenresNames() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
getGenresNames().then(data => {
  localStorage.setItem('allGenres', JSON.stringify(data.genres));
});
