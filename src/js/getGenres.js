import axios from 'axios';
export async function getGenres() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=3b94c1b54af7d429587ecf26a37007c0&language=en-US`,
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

//   getGenres().then(data => {
//     data.genres.forEach(genre => console.log(genre.id));
//   });
