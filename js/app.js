import { validateEmail, validateName, validateNumber, validateUrl } from "./validators.js";

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
//EVENT LISTENER DEL SUBMIT
//_________________________

$form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(event);

  ;

  if (!validateName($inputNombre) || !validateNumber($inputNumero) || !validateEmail($inputEmail) || !validateUrl($inputImagen)) {
    alert("revisa los campos");
    return;
  }
  const nombre = $inputNombre.value;
  const numero = $inputNumero.value;
  const email = $inputEmail.value;
  const imagen = $inputImagen.value;
  const notas = $inputNotas.value
});


