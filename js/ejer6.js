// Referencias a elementos del DOM
const botonAgregar = document.getElementById("agregarTarea");
const inputTarea = document.getElementById("nuevaTarea");
const listaTareas = document.getElementById("listaTareas");

// Evento para agregar una nueva tarea
botonAgregar.addEventListener("click", () => {
  const texto = inputTarea.value.trim();

  if (texto === "") {
    alert("Por favor escribe una tarea.");
    return;
  }

  const divTarea = document.createElement("div");  // Crear contenedor de tarea
  divTarea.className = "tarea";

  const textoTarea = document.createElement("span"); // para  rear texto de la tarea
  textoTarea.textContent = texto;

  const iconoCheck = document.createElement("span"); //  Crear icono check para cambiar el collor
  iconoCheck.innerHTML = "X";
  iconoCheck.className = "icono no-realizada";

  iconoCheck.addEventListener("click", () => {
    console.log("Haz clic en el icono");
    iconoCheck.classList.toggle("realizada");
    //iconoCheck.classList.toggle("no realizada");
  });

  // Crear icono eliminar
  const iconoEliminar = document.createElement("span");
  iconoEliminar.innerHTML = "⚠️";
  iconoEliminar.className = "icono eliminar";

  // Confirmar y eliminar tarea al hacer clic
  iconoEliminar.addEventListener("click", () => {
    if (confirm("¿Estás seguro de eliminar esta tarea?")) {
      divTarea.remove();
    }
  });

  divTarea.appendChild(textoTarea);
  divTarea.appendChild(iconoCheck);
  divTarea.appendChild(iconoEliminar);


  listaTareas.appendChild(divTarea);   // Agregar a la lista

  
  inputTarea.value = ""; // limpiar todo el texto o lo que hay en la pantalla
});
