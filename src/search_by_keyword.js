import { fetchMovie } from './find_movie';

const search_form = document.querySelector('#search-form');

search_form.addEventListener('submit', e => {
  const value = search_form.elements.searchQuery.value;
  if (value.trim() === '') {
    e.preventDefault();
    return;
  }
  e.preventDefault();

  fetchMovie(value.trim());
});
