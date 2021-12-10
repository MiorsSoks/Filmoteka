import { fetchCollection } from "./bring_trend_collection";
import { renderCollection } from "./create_render_collection";

window.addEventListener('load', () => {
    fetchCollection().then(data => {
        renderCollection(data.results);
      });
});


