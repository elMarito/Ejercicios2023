// Diapositiva 3 - Ejercicios en Clase
// Ejercicio 2
// Crear un proyecto
// Crear dos archivos con funcionalidades diferentes
// Cada uno utilizando una librería diferente, sin contar readline-sync
// Definir las tareas asociadas y ejecutarlas
// Subir proyecto a GitHub y agregar a su tutor asignado como revisor de la tarea
//=============================================================================
const readlineSync = require('readline-sync');
console.log("A continuación podrá generar sonidos elijiendo las siguientes opciones.");

let cantidad: number = Number(readlineSync.question("Elija la cantidad de beeps entre (1 y 5): "));
if (isNaN(cantidad) || (cantidad > 5) || (cantidad < 1)) cantidad = 1;

let milisegundos: number = Number(readlineSync.question("Elija la cantidad de milisegundos entre ellos: (mínimo 500 mseg)."));
if (isNaN(milisegundos) || (milisegundos  > 2000) || (milisegundos < 500)) milisegundos = 500;

console.log(`A continuacion escuchara ${cantidad} beep(s) cada ${milisegundos} milisegundos.`);
let beep = require('beepbeep')
beep(cantidad, milisegundos) // Beep!

// beep([1000, 500, 2000])
// 1 second delay...Beep! 0.5 second delay...Beep! 2 second delay...Beep!