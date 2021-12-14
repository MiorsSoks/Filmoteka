import axios from 'axios';
import Pagination from 'tui-pagination';
import {renderCollection} from "./create_render_collection";

  const container = document.getElementById('pagination');
const options = {   
    itemsPerPage: 20,
    visiblePages: 7,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:        
          '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
              '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</a>',
      disabledMoveButton:
          '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
              '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</span>',
      moreButton:
          '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
              '<span class="tui-ico-ellip">...</span>' +
          '</a>'
  }
  };

  const paginationTrend = new Pagination(container, options);
  const page = paginationTrend.getCurrentPage()

fetchCollection(page).then(({total_pages}) => {
  console.log(total_pages)
  paginationTrend.reset(total_pages)})

  paginationTrend.on('afterMove', ({page}) => {  
  fetchCollection(page).then(data => renderCollection(data.results));
});

export async function fetchCollection(page) {
  console.log("page", page)
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=3b94c1b54af7d429587ecf26a37007c0&page=${page}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
