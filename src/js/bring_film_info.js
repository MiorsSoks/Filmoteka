import axios from 'axios';

let filmId = 71446;

export async function fetchFilmInfo(filmId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${filmId}?api_key=3b94c1b54af7d429587ecf26a37007c0&language=en-US`,
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
