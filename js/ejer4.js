//const contenedor = document.getElementById("contenedor"); //siempre es mejor usar el método getElementById para traer el elemento padre

const viejoDiv = document.getElementById("contenedor"); // es para llamar el div que vamos a reemplazar

const nuevoDiv = document.createElement("div"); // es para crear el nuevo div
nuevoDiv.id = "nuevoDiv";
nuevoDiv.textContent = "Este es el nuevo div creado por Juan Ipia desde JavaScript";

const padreDiv = viejoDiv.parentNode; // obtener el elemento padre
padreDiv.replaceChild(nuevoDiv, viejoDiv); // reemplazar

console.log("Hola Juan Ipia, el div ha sido reemplazado exitosamente");
console.log("Este era el div anterior" +  nuevoDiv.textContent);

