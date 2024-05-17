//_________________________
//PARA VALIRAR TODOS LOS CAMPOS DEL FORM
//_________________________
//retorna in boleano cuando el campo es true
export const validateName = (field) => {
  //validar campos vacios, null, etc
  if (!field || !field.value.trim()) {
    field.classList.add('is-invalid');
    field.classList.remove('is-valid');
    return false;
  }
  //validar logitud
  if (field.value.trim().lenght < 3 || field.value.trim().lenght > 25) {
    field.classList.add('is-invalid');
    field.classList.remove('is-valid');
    return false;
  }
  //validar que sean letras
  const regex = /^[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ\s]+$/;
  if (!regex.test(field.value)) {
    field.classList.add('is-invalid');
    field.classList.remove('is-valid');
    return false;
  }
  field.classList.remove('is-invalid');
  field.classList.add('is-valid');
  return true;
};
