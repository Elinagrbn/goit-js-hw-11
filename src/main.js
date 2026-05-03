import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const query = e.target.elements['search-text'].value.trim();

  if (!query) return;

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(() => {
      iziToast.error({
        message: 'Error fetching images!',
      });
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
}
