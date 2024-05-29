export const obtenerContactosDeLs =()=>{
    return JSON.parse(localStorage.getItem('contactos')) || [];
}