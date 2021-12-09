import { fetchCollection } from './bring_trend_collection';
import { renderCollection } from './create_render_collection';
import { renderMarkup } from './create_markup';

window.addEventListener('load', () => {
  fetchCollection().then(data => {
    renderMarkup(data.results);
  });
});
