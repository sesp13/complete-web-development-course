document.addEventListener('DOMContentLoaded', function () {
  bootstrapApp();
});

function bootstrapApp() {
  createGallery();
  scrollNav();
  fixedNavigation();
}

function scrollNav() {
  const links = document.querySelectorAll('.main-navigation a');
  links.forEach((link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = event.target.attributes.href.value;
      console.log(targetId);
      const section = document.querySelector(targetId);
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function fixedNavigation() {
  const body = document.querySelector('body');
  const header = document.querySelector('header');
  const aboutFestival = document.querySelector('.about-festival');

  window.addEventListener('scroll', function () {
    if (aboutFestival.getBoundingClientRect().top < 0) {
      header.classList.add('fixed');
      body.classList.add('body-scroll');
    } else {
      header.classList.remove('fixed');
      body.classList.remove('body-scroll');
    }
  });
}

function htmlGalleryPictureBody(folder, name) {
  return `
  <source srcset="build/img/${folder}/${name}.avif" type="image/avif" />
  <source srcset="build/img/${folder}/${name}.webp" type="image/webp" />
  <img
    loading="lazy"
    width="200"
    height="300"
    src="build/img/${folder}/${name}.jpg"
    alt="Vocalist image"
  />
`;
}

function createGallery() {
  const gallery = document.querySelector('.image-gallery');

  for (let i = 1; i < 13; i++) {
    const image = document.createElement('picture');
    image.innerHTML = htmlGalleryPictureBody('thumb', i);
    image.onclick = function () {
      showImage(i);
    };
    gallery.appendChild(image);
  }
}

function showImage(id) {
  const body = document.querySelector('body');

  const image = document.createElement('picture');
  image.innerHTML = htmlGalleryPictureBody('grande', id);

  const overlay = document.createElement('div');
  overlay.appendChild(image);
  overlay.classList.add('overlay');

  const closeButton = document.createElement('p');
  closeButton.textContent = 'X';
  closeButton.classList.add('btn-close');
  closeButton.onclick = function () {
    body.classList.remove('fix-body');
    overlay.remove();
  };
  overlay.appendChild(closeButton);

  // Add modal to  the document
  body.appendChild(overlay);
  body.classList.add('fix-body');
}
