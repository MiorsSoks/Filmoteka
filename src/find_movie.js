      import axios from 'axios';

const button_search = document.querySelector('.search');

export async function fetchMovie(value) {
    try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3b94c1b54af7d429587ecf26a37007c0&language=en-US&query=${value}&page=1&include_adult=false`);

    if (response.data.total_pages === 0) {
      button_search.setAttribute('disabled', true);
      return;
    }

       return response.data;
    } catch (error) {
      console.error(error);
    }        
      };

//3b94c1b54af7d429587ecf26a37007c0 (API_KEY);

// https://api.themoviedb.org/3/trending/all/day?api_key=3b94c1b54af7d429587ecf26a37007c0 Ссылка на документацию для запроса на список самых популярных фильмов на сегодня для создания коллекции на главной странице;

//https://api.themoviedb.org/3/movie/71446?api_key=3b94c1b54af7d429587ecf26a37007c0&language=en-US Ссылка на документацию для запроса у полной информации о кинофильме для страницы кинофильма:
