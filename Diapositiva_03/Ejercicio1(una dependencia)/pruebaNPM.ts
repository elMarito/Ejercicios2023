// Diapositiva 3 - Ejercicios 
// Ejercicio 1
// Crear Proyecto NPM
// Buscar en la página alguna dependencia e instalarla (además de readline-sync)
// Desarrollar alguna funcionalidad que utilice la dependencia instalada
// Subir proyecto a GitHub y agregar a su tutor asignado como revisor de la tarea
//=============================================================================
const ascii_text_generator = require('ascii-text-generator');

let input_text = "otra \\ndependencia";
let text = "/*\n" + ascii_text_generator(input_text, "2") + "\\n*/";
console.log(text);
console.log("-----------------------------------------------------------------------------");
input_text = "hola mundo ";
//let ascii_text = ascii_text_generator(input_text, "1");
//console.log(ascii_text);
console.log( ascii_text_generator(input_text+ 1,"1"));
console.log( ascii_text_generator(input_text+ 2,"2"));
console.log( ascii_text_generator(input_text+ 3,"3"));