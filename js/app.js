import { agregarContacto } from "./abm.js";
import {
  validateEmail,
  validateName,
  validateNumber,
  validateUrl,
} from "./validators.js";

//_________________________
//SELECCIONAR LOS ELEMENTOS
//_________________________

const $form = document.getElementById("form-contacto");
const $inputNombre = document.getElementById("input-nombre");
const $inputNumero = document.getElementById("input-numero");
const $inputEmail = document.getElementById("input-email");
const $inputImagen = document.getElementById("input-imagen");
const $inputNotas = document.getElementById("input-notas");


//_________________________
//EVENT LISTENER DEL BLUR
//_________________________

$inputNombre.addEventListener('blur', ()=>{
  validateName($inputNombre);
});

$inputNumero.addEventListener('blur', ()=>{
  validateNumber($inputNumero);
});

$inputEmail.addEventListener('blur', ()=>{
  validateEmail($inputEmail);
});

$inputImagen.addEventListener('blur', ()=>{
  validateUrl($inputImagen);
});


//_________________________
//EVENT LISTENER DEL SUBMIT
//_________________________

$form.addEventListener("submit", (event) => {
  event.preventDefault();

  // A- aca validamos los campos

  if (
    !validateName($inputNombre) ||
    !validateNumber($inputNumero) ||
    !validateEmail($inputEmail) ||
    !validateUrl($inputImagen)
  ) {
    alert("revisa los campos");
    return;
  }

  //B- todo ok, conseguir los datos extraidos del formulario

  const nombre = $inputNombre.value;
  const numero = $inputNumero.value;
  const email = $inputEmail.value;
  const imagen = $inputImagen.value;
  const notas = $inputNotas.value;

  agregarContacto(nombre, numero, email, imagen, notas);

  //C- resetear formulario
  $form.reset(); //limpia todos los campos del form
  $inputNombre.classList.remove('is-valid', 'is-invalid');
  $inputNumero.classList.remove('is-valid', 'is-invalid');
  $inputEmail.classList.remove('is-valid', 'is-invalid');
  $inputImagen.classList.remove('is-valid', 'is-invalid');

  //D- notificar al usuario
  alert(`contacto creado bajo el nombre de ${nombre}`)
});
