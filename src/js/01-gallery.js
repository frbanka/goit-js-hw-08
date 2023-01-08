import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const galleryIt = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
</div>`
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', galleryIt);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
