import {fetchMovie} from './find_movie';

const search_form = document.querySelector('.header-form');

search_form.addEventListener('submit', (e) => {
  const value = search_form.elements.appellation.value;
  if (value.trim() === '') {
    e.preventDefault();
    return;
    };
  e.preventDefault();
  
  fetchMovie(value.trim());
 
  });
