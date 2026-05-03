import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const markup = images
    .map(
      img => `
<li class="gallery-item">
<a href="${img.largeImageURL}">
<img src="${img.webformatURL}" alt="${img.tags}" />
</a>
<div class="info">
<p><b>Likes</b><br>${img.likes}</p>
<p><b>Views</b><br>${img.views}</p>
<p><b>Comments</b><br>${img.comments}</p>
<p><b>Downloads</b><br>${img.downloads}</p>
</div>
</li>
`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}
