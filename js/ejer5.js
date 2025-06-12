function mostrarAlerta() { // primero crear la funcion de la alerta
  alert("Este botón ya ha sido clickeado");
}
const boton = document.getElementById("clickMe");

boton.addEventListener("click", mostrarAlerta); // asignar el evento click al botón clickMe

const removerEvento = document.getElementById("removeEvent"); // llamar el botón removeEvent que es el de eliminar 

removerEvento.addEventListener("click", () => {   // asignar evento al botón removeEvent para quitar el evento del botón clickMe
  boton.removeEventListener("click", mostrarAlerta);
  alert("Evento eliminado: ahora el botón ya no funciona.");
});


