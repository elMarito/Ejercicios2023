// Diapositiva 8 - Ejercicios - En Clase
// Ejercicio 1
// Plantear diagrama de clases para clases Auto y AutoCarreras redefiniendo métodos
// Implementar el código
// Subir las cosas a GitHub y avisar por Slack
//=============================================================================
import { Auto } from "./auto";
import { AutoCarrera } from "./autoCarrera";
//-----------------------------------------------------------------------------
let primerAuto: Auto = new Auto('Ford', 'Fiesta');
let superAuto: AutoCarrera = new AutoCarrera('Ford', 'Mustang');

primerAuto.acelerar();
superAuto.acelerar();

console.table(primerAuto);
console.table(superAuto);