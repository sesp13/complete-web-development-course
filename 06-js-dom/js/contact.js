// Events
// console.log(1);
window.addEventListener('load', () => {
  // Load waits thet JS and HTML to be ready
  // console.log(2);
  // console.log('Load event done');
});

document.addEventListener('DOMContentLoaded', function () {
  // Only waits for HTML, not css neither images
  // console.log(4);
});
// console.log(5);

// React to click events
// const btnSend = document.querySelector('.boton--primario');
// btnSend.addEventListener('click', (event) => {
//   event.preventDefault();
//   console.log('Click event');
// });

// React to keyboard events.
const data = {
  nombre: '',
  email: '',
  mensaje: '',
};

const inputName = document.querySelector('#nombre');
inputName.addEventListener('input', readText);

const inputEmail = document.querySelector('#email');
inputEmail.addEventListener('input', readText);

const inputMessage = document.querySelector('#mensaje');
inputMessage.addEventListener('input', readText);

function readText(event) {
  const id = event.target.id;
  data[id] = event.target.value;
}

// Submit event
const form = document.querySelector('.formulario');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validate form
  const { nombre, email, mensaje } = data;

  if (nombre === '' || email == '' || mensaje == '') {
    showAlert('All the fields are required', 'error');
    return;
  }

  // send form
  // console.log('Submit event!');
  showAlert('The data was sent', 'correcto');
});

function showAlert(message, classToAdd) {
  // Create Html with JS
  const messageText = document.createElement('p');
  messageText.textContent = message;
  messageText.classList.add(classToAdd);
  form.appendChild(messageText);

  setTimeout(() => {
    messageText.remove();
  }, 3000);
}
