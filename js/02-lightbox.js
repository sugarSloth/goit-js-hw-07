import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

const createGalleryMarkup = (items) => {
  return items.map((item) => {
    return `<a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>`;
  }).join('');
};

galleryEl.insertAdjacentHTML('afterbegin', createGalleryMarkup(galleryItems));

const lightboxScriptEl = document.createElement('script');
lightboxScriptEl.src = 'https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.7.0/simple-lightbox.min.js';
document.body.appendChild(lightboxScriptEl);

const lightboxLinkEl = document.createElement('link');
lightboxLinkEl.rel = 'stylesheet';
lightboxLinkEl.href = 'https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.7.0/simple-lightbox.min.css';
document.head.appendChild(lightboxLinkEl);

lightboxScriptEl.onload = function () {
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
};
