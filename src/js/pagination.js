//Ссылка на доки библиотеки  https://github.com/nhn/tui.pagination/blob/production/docs/getting-started.md
import axios from 'axios';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import {renderCollection} from "./create_render_collection";
const container = document.getElementById('pagination');

let value ="";
const search_form = document.querySelector('.header-form');

search_form.addEventListener('submit', e => {
  e.preventDefault();
  value = search_form.elements.appellation.value.trim();
  console.log(value)

  fetchMoviePagination(value, page).then(({ total_results, total_pages }) => {
    console.log('total_results', total_results);
    pagination.reset(total_pages);

  fetchMoviePagination(value, page).then(data => renderCollection(data.results))
  setPagination (value)
  });  
});
// console.log(value)

const API_KEY = 'api_key=3b94c1b54af7d429587ecf26a37007c0'
const PER_PAGE = 20;
const options = {
  totalItems: 20,
  itemsPerPage: PER_PAGE,
  visiblePages: 7,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
};
const pagination = new Pagination(container, options);
const page = pagination.getCurrentPage()
// console.log("page", page);

function setPagination (value) {
  pagination.on('afterMove', ({page}) => {console.log("eeeeeee", page)
  fetchMoviePagination(value, page).then(data => renderCollection(data.results));
});
}

// setPaginationTrending().then(data => ({currentPage: page, resultsImg: results, totalPage: total_pages }))
//page: 1 results: (20) [{…}{…}] total_pages: 1000 total_results: 20000

async function fetchMoviePagination(value, page) {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?${API_KEY}&language=en-US&query=${value}&page=${page}&per_page=${PER_PAGE}&include_adult=false`);
    return response.data;
    } catch (error) {
      console.error(error);
    }        
};
// fetchMoviePagination(value, page).then(console.log)

