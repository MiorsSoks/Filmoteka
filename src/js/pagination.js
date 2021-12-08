//Ссылка на доки библиотеки  https://github.com/nhn/tui.pagination/blob/production/docs/getting-started.md 
  import axios from 'axios';
import Pagination from 'tui-pagination';
// import {renderMarkup} from './create_markup'
const container = document.getElementById('pagination');

const API_KEY = 'api_key=3b94c1b54af7d429587ecf26a37007c0'
const PER_PAGE = 20;

const options = {
  totalItems: 20,
  itemsPerPage: 20,
  visiblePages: 7,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
};
const pagination = new Pagination(container, options);

const page = pagination.getCurrentPage()
console.log(page);

fetchMovie(page).then(({ total_results, total_pages }) => {
  console.log(total_results);
  pagination.reset(total_pages);
});

async function fetchMovie( value, page) {
  // const value =  document.getElementById("film-name").value;
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?${API_KEY}&language=en-US&query=${value}&page=${page}^&per_page=${PER_PAGE}&include_adult=false`);
    return response.data;
    } catch (error) {
      console.error(error);
    }        
};
  pagination.on('afterMove', ({ page }) => console.log(page));

