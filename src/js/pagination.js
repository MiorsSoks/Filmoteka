//Ссылка на доки библиотеки  https://github.com/nhn/tui.pagination/blob/production/docs/getting-started.md
import axios from 'axios';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
// import {renderMarkup} from './create_markup'
const container = document.getElementById('pagination');

// const containerr = document.querySelector('.tui-pagination');
// <div id="pagination" class="tui-pagination"></div>

// const imageList = document.querySelector('.image-list');
const value = 1;

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
console.log("page", page);

fetchMovie(value, page).then(({ total_results, total_pages }) => {
  console.log('total_results', total_results);
  pagination.reset(total_pages);
});

// async function setPaginationTrending(page) {
//   try{const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=3b94c1b54af7d429587ecf26a37007c0&`)
//   return response}
//   catch(error){
//     console.log(error)}
//   }
// setPaginationTrending().then(data => ({currentPage: page, resultsImg: results, totalPage: total_pages }))

//page: 1 results: (20) [{…}{…}] total_pages: 1000 total_results: 20000

async function fetchMovie(value, page) {
  // const value =  document.getElementById("film-name").value;
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?${API_KEY}&language=en-US&query=${value}&page=2&per_page=${PER_PAGE}&include_adult=false`);
    return response.data;
    } catch (error) {
      console.error(error);
    }        
};
fetchMovie(value, page).then(console.log)

  // pagination.on('afterMove', ({ page }) => console.log("pagepagination", page));

  pagination.on('afterMove', ({ page }) => {
    fetchMovie(value, page).then(({ images }) => {
      // renderImages(images);
      console.log
    });
  });

console.log(typeof(NaN))

//   if (currentPage === 10) {
//     return false;
//     // return true;
// }

