const nuevoParrafo = document.createElement("p"); //es para crear el nuevo parrafo
nuevoParrafo.textContent = "Este es el nuevo parrafo creado dinamicamente";
document.body.appendChild(nuevoParrafo);
// console.log(nuevoParrafo.textContent);

const btnEliminar = document.querySelector("#eliminar"); //es para llamar el botón

btnEliminar.addEventListener("click", () =>{
    const parrafoTExto = document.querySelector("p"); //es para llamar el botón
    if (parrafoTExto) {
        alert("Desea eliminar el parrafo?");
    parrafoTExto.remove();
  } else {
    alert("No hay párrafos para eliminar.");
  }
})