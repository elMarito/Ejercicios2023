// Diapositiva 3 - Ejercicios en Clase
// Ejercicio 2
// Crear un proyecto
// Crear dos archivos con funcionalidades diferentes
// Cada uno utilizando una librería diferente, sin contar readline-sync
// Definir las tareas asociadas y ejecutarlas
// Subir proyecto a GitHub y agregar a su tutor asignado como revisor de la tarea
//=============================================================================
const ascii_text_generator = require('ascii-text-generator');
const readlineSync = require('readline-sync');
const palabra: string = readlineSync.question("ingrese una palabra para formatear: ");
//-----------------------------------------------------------------------------
if (palabra === "")
    console.log(`Error! palabra vacia.`);
else {
    const formato: string = readlineSync.question("Elija uno de los siguientes formatos (1,2,3): ");
    switch (formato) {
        case "1": case "2": case "3":
            console.log(ascii_text_generator(palabra, formato));
            break;
        default:
            let beep = require('beepbeep');
            beep(3);    //sonido de error!
            console.log(`Error! formato incorrecto`);
        //       break;
    }
}
// process.abort() <-no usar