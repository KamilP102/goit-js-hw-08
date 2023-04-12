// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const imageList = galleryItems
  .map(
    item =>
      `<a class="gallery__item" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      alt=${item.description}
    />
  </a>`
  )
  .join('');
gallery.insertAdjacentHTML('afterbegin', imageList);

let lightbox = new SimpleLightbox('.gallery a', {
  sourceAttr: `href`,
  captionsData: `alt`,
  captionDelay: 250,
});

console.log(galleryItems);
