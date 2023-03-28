import { galleryItems } from './gallery-items.js';

const galleryElement = document.querySelector('.gallery');

const createGalleryMarkup = (galleryItems) => {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
              </a>
            </div>`;
    }).join('');
};

const onImageClick = (event) => {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
        <img class="gallery__image" src="${event.target.dataset.source}" width="800" height="600">
    `);

    instance.show();

    const onEscClick = (event) => {
        if (event.code !== 'Escape') {
            return;
        }

        instance.close();

        window.removeEventListener('keydown', onEscClick);
    };

    if (instance.visible()) {
        window.addEventListener('keydown', onEscClick);
    }
};

galleryElement.insertAdjacentHTML('afterbegin', createGalleryMarkup(galleryItems));
galleryElement.addEventListener('click', onImageClick);
