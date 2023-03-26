// Diapositiva 8 - Ejercicios - En Clase
// Ejercicio 2
// Idem ejercicio anterior, pero proponiendo un ejercicio que emplee una 
// clase padre y dos clases hijas → usando polimorfismo
// Subir las cosas a GitHub y avisar por Slack
//=============================================================================
import { Auto } from "./auto";
import { AutoCarrera } from "./autoCarrera";
import { AutoCiudad } from "./autoCiudad";
//-----------------------------------------------------------------------------
let primerAuto: Auto = new Auto('Ford', 'Fiesta');
let superAuto: AutoCarrera = new AutoCarrera('Chevrolet', 'Camaro');
let autoNormal: AutoCiudad = new AutoCiudad('Peugeot', '504');

primerAuto.acelerar();
superAuto.acelerar();
autoNormal.acelerar();

console.table(primerAuto);
console.table(superAuto);
console.table(autoNormal);