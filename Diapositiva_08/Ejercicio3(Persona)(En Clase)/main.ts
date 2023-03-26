// Diapositiva 8 - Ejercicios - En Clase
// Ejercicio 3
// Con lo visto de Herencia y Polimorfismo, Plantear diagrama de clases para 
// clases Persona (clase Padre), Adulto, Adolescente y Niño redefinir en las 
// clases hijas los metodos creados para la clase Persona (ej Caminar, correr, etc.) 
// Subir las cosas a GitHub y avisar por Slack
//=============================================================================
import { Niño } from "./niño";
import { Adolescente } from "./adolescente";
import { Adulto } from "./adulto";
//-----------------------------------------------------------------------------
let unAdulto: Adulto = new Adulto('Homero', 'Simpson','1000');
let unAdolescente: Adolescente = new Adolescente('Bart', 'Simpson','1003');
let unNiño: Niño = new Niño('lisa','Simpson', '1004');

console.table(unAdulto);
console.table(unAdolescente);
console.table(unNiño);

unAdulto.caminar();
unAdolescente.caminar();
unNiño.caminar();
console.log("-------------------------------------------");
unAdulto.correr();
unAdolescente.correr();
unNiño.correr();