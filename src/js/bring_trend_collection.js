import axios from 'axios';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import {renderCollection} from "./create_render_collection";

  const container = document.getElementById('pagination');
const options = {
    // totalItems: 20,
    itemsPerPage: 20,
    visiblePages: 7,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
  };

  const paginationTrend = new Pagination(container, options);
  const page = paginationTrend.getCurrentPage()
  console.log("pageT", page);


fetchCollection(page).then(({total_pages, page, results}) => {
  console.log(total_pages)
  console.log(page)
  console.log(results)
  paginationTrend.reset(total_pages)})


  paginationTrend.on('afterMove', ({page}) => {console.log("eeeeeeettt", page)  
  fetchCollection(page).then(data => renderCollection(data.results));
});

export async function fetchCollection(page) {
  console.log("apapapaap", page)
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=3b94c1b54af7d429587ecf26a37007c0&page=${page}`,
      );
  
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }