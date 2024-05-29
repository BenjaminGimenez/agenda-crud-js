import { Contacto } from "./Contacto.js";

export const agregarContacto = (nombre, numero, email, imagen, notas) => {
  const contacto = new Contacto(nombre, numero, email, imagen, notas);

  console.log(contacto)
};

const editarContacto = () => {};
const eliminarContacto = () => {};
