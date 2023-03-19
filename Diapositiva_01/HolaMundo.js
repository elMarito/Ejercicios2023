// Diapositiva 1
// Ejercicio 1
// Modificar el primer script de “Hola Mundo” para que:
//  El mensaje que se muestra al usuario se almacene en una variable llamada
//  mensaje y el funcionamiento del script sea el mismo.
// Modificar el ejemplo de secuencia:
//  Que cada mensaje se almacene en una variable a mostrar por consola y que 
//  el funcionamiento del script sea el mismo
// Modificar el ejemplo de base por altura
//  Almacenar la base y la altura en variables y el resultado y que 
//  el funcionamiento del script sea el mismo
//=============================================================================

const mensaje = "Hola Mundo";
console.log(mensaje);

const readlineSync = require('readline-sync');
const alturaPersona = readlineSync.question("Indique la altura de la persona: ");
console.log(alturaPersona);
