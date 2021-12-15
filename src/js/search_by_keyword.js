import { fetchMovie } from './bring_movie';
import { renderCollection } from './create_render_collection';

const search_form = document.querySelector('.header-form');

search_form.addEventListener('submit', e => {
  const value = search_form.elements.appellation.value;
  if (value.trim() === '') {
    e.preventDefault();
    return;
  }
  e.preventDefault();

  fetchMovie(value.trim())
    .then(data => {
      renderCollection(data.results);
    })
    .catch(console.log);
});
