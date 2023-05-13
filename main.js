const formulario = document.querySelector('form');
const mensajesDiv = document.querySelector('#mensajes');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  const nombre = formulario.nombre.value;
  const mensaje = formulario.mensaje.value;
  const nuevoMensaje = document.createElement('div');
  nuevoMensaje.innerHTML = `<p><strong>${nombre}</strong>: ${mensaje}</p>`;
  mensajesDiv.appendChild(nuevoMensaje);
  formulario.reset();
});
