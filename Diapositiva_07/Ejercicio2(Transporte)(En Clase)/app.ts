// Diapositiva 7 - Ejercicios - En Clase
// Ejercicio 2
// Implementar la clase Transporte con atributos y métodos comunes a todos los medios de transporte
// A partir de la clase transporte, crear las clases Auto y Moto (hijas de Transporte).
// Implementar cada clase en un archivo diferente
// Ojo con la forma de hacer los import
// Subir las cosas a GitHub y avisar por Slack (opcional)
//=============================================================================
import { Auto } from "./auto";
import { Moto } from "./moto";
//-----------------------------------------------------------------------------
const miMoto: Moto = new Moto("df-111-dd", "chico", 300);
const miAuto: Auto = new Auto("ab-564-er", "mediano", 700);

miMoto.acelerar();
miAuto.acelerar();
miAuto.doblar(5,true )

console.table(miMoto);
console.table(miAuto);
