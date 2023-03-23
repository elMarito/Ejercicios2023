// Diapositiva 7 - Ejercicios - En Clase
// Ejercicio 4
// Implementar Registro Automotor visto anteriormente, pero agregando soporte 
// de motos y camiones usando herencia.
//=============================================================================
import { Auto } from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";
import { RegistroAutomotor } from "./registroAutomotor";
//-----------------------------------------------------------------------------
const miRegistro = new RegistroAutomotor("Las Flores", "San Martin 600");

miRegistro.darDeAlta(new Auto("ab-123-zx", "Triumph", "1970", "mediano"));
miRegistro.darDeAlta(new Moto("as-567-gh", "Harley", "2000", "mediano"));
miRegistro.darDeAlta(new Camion("hh-855-tt", "Chevrolet", "2021", "grande", 10000));
//-----------------------------------------------------------------------------
console.table(miRegistro.consultar("ab-123-zx"));
console.table(miRegistro.consultar("as-567-gh"));
console.table(miRegistro.consultar("hh-855-tt"));

console.log("------------------------------------------");
miRegistro.borrar("as-567-gh")
console.table(miRegistro.consultar("ab-123-zx"));
console.log(miRegistro.consultar("as-567-gh"), "<-- no existe porque se borro as-567-gh.");
console.table(miRegistro.consultar("hh-855-tt"));

console.log("------------------------------------------");
miRegistro.actualizar("aaaaaaaaa", "ab-999-cd");
miRegistro.actualizar("hh-855-tt", "ab-999-cd");

console.table(miRegistro.consultar("ab-123-zx"));
console.log(miRegistro.consultar("hh-855-tt"), "<-- no existe porque cambio la patente hh-855-tt.");
console.table(miRegistro.consultar("ab-999-cd"));
