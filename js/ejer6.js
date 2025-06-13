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

  // Crear contenedor de tarea
  const divTarea = document.createElement("div");
  divTarea.className = "tarea";

  // Crear texto de la tarea
  const textoTarea = document.createElement("span");
  textoTarea.textContent = texto;

  // Crear icono check
  const iconoCheck = document.createElement("span");
  iconoCheck.innerHTML = "X";
  iconoCheck.className = "icono no-realizada";

  // Alternar color al hacer clic
  iconoCheck.addEventListener("click", () => {
    console.log("Haz clic en el icono");
    iconoCheck.classList.toggle("realizada");
    //iconoCheck.classList.toggle("no-realizada");
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

  // Armar tarea
  divTarea.appendChild(textoTarea);
  divTarea.appendChild(iconoCheck);
  divTarea.appendChild(iconoEliminar);

  // Agregar a la lista
  listaTareas.appendChild(divTarea);

  // Limpiar input
  inputTarea.value = "";
});
