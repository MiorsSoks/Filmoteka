import Pagination from 'tui-pagination';
import {renderCollection} from "./create_render_collection";

const btnLibrary = document.querySelector(".header-link__library")
console.log(btnLibrary)
// btnLibrary.addEventListener("click", handlerLibray)

// function handlerLibray (event) {
  // event.preventDefault()
  // search_form.removeEventListener('submit', handlerKeyWord)
  const container = document.getElementById('paginationLibrary');
  const options = {
    totalItems: 20,  
    itemsPerPage: 20,
    visiblePages: 7,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
  };

  const paginationLibraly = new Pagination(container, options);
  const page = paginationLibraly.getCurrentPage()
  console.log(page)

  paginationLibraly.reset(50)
  
  paginationLibraly.on('afterMove', ({page}) => {  
    console.log(page)
    // fetchCollection(page).then(data => renderCollection(data.results));
  });

  // fetchCollection(page).then(({total_pages}) => {
  //   console.log(total_pages)
  //   paginationLibraly.reset(total_pages)})
  
// }
