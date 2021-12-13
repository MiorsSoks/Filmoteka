//Ссылка на доки библиотеки  https://github.com/nhn/tui.pagination/blob/production/docs/getting-started.md
import axios from 'axios';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import {renderCollection} from "./create_render_collection";

const container = document.getElementById('pagination');
const search_form = document.querySelector('.header-form');
search_form.addEventListener('submit', handlerKeyWord);

function handlerKeyWord(e) {
e.preventDefault();
  let value = search_form.elements.appellation.value.trim();
  console.log(value)

  fetchMoviePagination(value, page).then(data => {if (data)
    {pagination.reset(data.total_pages);
    renderCollection(data.results)}
    }).catch(console.error)

  setPagination (value)
}
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
const errorText = document.querySelector(".header-search__error")

function setPagination (value) {
  pagination.on('afterMove', ({page}) => { 
  fetchMoviePagination(value, page).then(data => renderCollection(data.results)).catch(console.log)
})}

async function fetchMoviePagination(value, page) {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?${API_KEY}&language=en-US&query=${value}&page=${page}&per_page=${PER_PAGE}&include_adult=false`);
    console.log(response)
    errorText.classList.add("header-search__error-hidden")
  if (response.data.total_results !== 0) {
    return response.data
  } else {
    errorText.classList.remove("header-search__error-hidden")
  }
    } catch (error) {
      console.error(error);
    }        
}
