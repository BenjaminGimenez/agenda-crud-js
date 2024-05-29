import { Contacto } from "./Contacto.js";
import { obtenerContactosDeLs } from "./utils.js";

export const agregarContacto = (nombre, numero, email, imagen, notas) => {
  const contacto = new Contacto(nombre, numero, email, imagen, notas);

  console.log(contacto);

  //1. traemos desde localstorage lo que se haya guardado
  const contactos = obtenerContactosDeLs(); //obtener y convertir en un objeto de JavaScript los datos almacenados previamente 
  //2. agregamos a lo que estaba guardado
  contactos.push(contacto);

  //almacenar los datos en local storage
  localStorage.setItem("contactos", JSON.stringify(contactos)); //tengo que pasar el arreglo a string
};

const editarContacto = () => {};
const eliminarContacto = () => {};
