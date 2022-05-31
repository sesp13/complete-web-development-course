document.addEventListener('DOMContentLoaded', function () {
  bootstrapApp();
});

function bootstrapApp() {
  createGallery();
}

function createGallery() {
  const gallery = document.querySelector('.image-gallery');

  for (let i = 1; i < 13; i++) {
    const image = document.createElement('picture');
    image.innerHTML = `
      <source srcset="build/img/thumb/${i}.avif" type="image/avif" />
      <source srcset="build/img/thumb/${i}.webp" type="image/webp" />
      <img
        loading="lazy"
        width="200"
        height="300"
        src="build/img/thumb/${i}.jpg"
        alt="Vocalist image"
      />
    `;
    gallery.appendChild(image);
  }
}
