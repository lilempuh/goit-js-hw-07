import { galleryItems } from './gallery-items.js';

const refs = {
    containerFromGallery:document.querySelector(".gallery")
}
const imagesGallyreItemsMarkup = imagesGallyreItems(galleryItems);


function imagesGallyreItems(images) {
  return images.map(({ preview, original, description }) =>
 `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    ).join("");
}

refs.containerFromGallery.innerHTML = imagesGallyreItemsMarkup;

refs.containerFromGallery.addEventListener("click", onOpenGalleryItems);

function onOpenGalleryItems(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") { return };

    console.log(event.target);
    
    const createElement = event.target.dataset.source;
    openModal(createElement);
}

function openModal(createElement) {
    const instance = basicLightbox.create(`
            <img src="${createElement}" class="modal"/>
    `);

    instance.show();

    document.addEventListener("keydown", event => {
        event.preventDefault();
        if (event.code === 'Escape') {
            instance.close();
        };
    });
};       




// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

// Реализация делегирования на div.gallery и получение url большого изображения.

// Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
// Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента < img > в модальном окне перед открытием. 
// Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.