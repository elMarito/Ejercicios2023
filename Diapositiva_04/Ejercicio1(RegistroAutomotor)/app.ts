import { Goma } from "../Ejercicio2(Auto)(En Clase)/goma";
import { Motor } from "../Ejercicio2(Auto)(En Clase)/motor";
import { Auto } from "../Ejercicio2(Auto)(En Clase)/auto";
import { RegistroAutomotor } from "./registroAutomotor";

const miRegistro = new RegistroAutomotor("Las Flores", "San Martin 600");

const miMotor = new Motor("Grandote");
const misGomas: Goma[] = [new Goma(20), new Goma(20), new Goma(20), new Goma(20)];


let unAuto = new Auto("Triumph", "Banana", miMotor, misGomas);
unAuto.setPatente("abc-123")
miRegistro.darDeAlta(unAuto)

unAuto = new Auto("Ford", "Mondeo", miMotor, misGomas);
unAuto.setPatente("xyz-987")
miRegistro.darDeAlta(unAuto)

unAuto = new Auto("Chevrolet", "Camaro", miMotor, misGomas);
unAuto.setPatente("aei-024")
miRegistro.darDeAlta(unAuto)
//-----------------------------------------------------------------------------
console.log(miRegistro.consultar("abc-123"));
console.log(miRegistro.consultar("xyz-987"));
console.log(miRegistro.consultar("aei-024"));

console.log("------------------------------------------");
miRegistro.borrar("xyz-987")
console.log(miRegistro.consultar("abc-123"));
console.log(miRegistro.consultar("xyz-987"), "<-- no existe porque se borro.");
console.log(miRegistro.consultar("aei-024"));

console.log("------------------------------------------");
unAuto = miRegistro.consultar("abc-123") as Auto;
unAuto.setPatente("ab-123-cd")
miRegistro.actualizar("abc-123", unAuto);
console.log(miRegistro.consultar("abc-123"), "<-- no existe porque cambio la patente.");
console.log(miRegistro.consultar("ab-123-cd"));
console.log(miRegistro.consultar("aei-024"));
