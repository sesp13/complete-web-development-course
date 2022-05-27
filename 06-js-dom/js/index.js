// Query selector
// 0 or 1 elements
const heading = document.querySelector('.header__texto h2');
heading.textContent = 'Hello world from JavaScript';
heading.classList.add('new-class');

// Query selector all
const links = document.querySelectorAll('.navegacion a');
// console.log(links);
links[0].textContent = 'New link text';
links[0].href = 'http://google.com';
links[0].classList.add('new-class');
links[0].classList.remove('navegacion__enlace');

// get element by id
const heading2 = document.getElementById('heading');
// console.log(heading2);

// Create new link
const newLink = document.createElement('a');
// console.log(newLink);

// Add href
newLink.setAttribute('href', 'new-link.html');

// Add text content
newLink.textContent = 'New link';

// Add class
newLink.classList.add('navegacion__enlace');

// Append element in dom
const navigation = document.querySelector('.navegacion');
navigation.appendChild(newLink);