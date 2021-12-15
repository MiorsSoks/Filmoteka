import { fetchCollection } from './bring_trend_collection';
import { renderCollection } from './create_render_collection';

const page = 1;
window.addEventListener('load', () => {
  fetchCollection(page).then(data => {
    renderCollection(data.results);
  });
});
