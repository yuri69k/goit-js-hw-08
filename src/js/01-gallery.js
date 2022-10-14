// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описан в документации
import SimpleLightbox from '../../node_modules/simplelightbox/src/simple-lightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');

const markup = createImgCardsMarkup(galleryItems);

function createImgCardsMarkup(img) {
  return img
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}" title="${description}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}

galleryRef.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
