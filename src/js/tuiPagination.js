import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const container = document.getElementById('pagination');


const options = {
    totalItems: 100,
    itemsPerPage: 20,
    visiblePages: 20,
    page: 1,
};

const pagination = new Pagination(container, options);
