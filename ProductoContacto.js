const formulario = document.getElementById('formulario');

// Agregar un evento de envío al formulario
formulario.addEventListener('submit', function(event) {
  // Validar el número de teléfono
  const telefono = document.getElementById('telefono').value;
  if (!/^\d{10}$/.test(telefono)) {
    alert('Ingrese un número de teléfono válido (10 dígitos).');
    event.preventDefault(); // Detener el envío del formulario si la validación falla
    return;
  }

  // Validar el correo electrónico
  const email = document.getElementById('email').value;
  if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
    alert('Ingrese un correo electrónico válido.');
    event.preventDefault(); // Detener el envío del formulario si la validación falla
    return;
  }

  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById('nombre').value;
  const mensaje = document.getElementById('mensaje').value;
  const mayor = document.getElementById('mayor').checked ? 'Soy mayor de edad' : 'No soy mayor de edad';
  const horario = document.getElementById('horario').value;

  // Construir el mensaje a mostrar en el alert
  const mensajeAlerta = `Nombre: ${nombre}\nTeléfono: ${telefono}\nEmail: ${email}\nMensaje: ${mensaje}\n${mayor}\nHorario de contacto: ${horario}`;

  // Mostrar el alert con los datos del formulario
  alert(mensajeAlerta);
});

// Obtener el botón de borrar campos
const botonBorrar = document.getElementById('borrarCampos');

// Agregar un evento al botón de borrar campos
botonBorrar.addEventListener('click', function(event) {
  // Limpiar los campos del formulario
  document.getElementById('nombre').value = '';
  document.getElementById('telefono').value = '';
  document.getElementById('email').value = '';
  document.getElementById('mensaje').value = '';
  document.getElementById('mayor').checked = false;
  document.getElementById('horario').value = 'manana'; // Valor por defecto
});