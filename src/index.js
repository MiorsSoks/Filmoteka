import './sass/main.scss';
import { fetchMovie } from './search_by_keyword';


const search_form = document.querySelector('#search-form');


//////////////////////////////////////////////////////////////////////////////////////

search_form.addEventListener('submit', (e) => {
  const value = search_form.elements.searchQuery.value;
  e.preventDefault();
  
  fetchMovie(value);
 
  });


  //3b94c1b54af7d429587ecf26a37007c0 (API_KEY)


