// Diapositiva 8 - Ejercicios - En Clase
// Ejercicio 4
// Con lo visto de Herencia y Polimorfismo, Plantear diagrama de clases para 
// clases Mamifero (clase Padre) y sus clases hijas Herviboro, Carnivoro y 
// Omnivoros. Redefinir en las clases hijas algun metodos creados para la 
// clase Padre (ej Comer) 
// Subir las cosas a GitHub y avisar por Slack
//=============================================================================
import { Carnivoro } from "./carnivoro";
import { Herviboro } from "./hervivoro";
import { Omnivoro } from "./omnivoro";
//-----------------------------------------------------------------------------
const animales: (Carnivoro | Herviboro | Omnivoro)[] = [
    new Herviboro('Gacela', ['terrestre'], true, false)
    , new Herviboro('Canguro', ['terrestre'], false, false)
    , new Carnivoro('Leon', ['terrestre'], true, false)
    , new Carnivoro('Orca', ['acuatico'], false, false)
    , new Carnivoro('Foca', ['acuatico', 'terrestre'], false, false)
    , new Omnivoro('Cerdo', ['terrestre'], true, false)
    , new Omnivoro('Murcielago', ['aereo', 'terrestre'], false, true)
]

animales.forEach(animal => { console.table(animal) });
console.log("-------------------------------------------");
animales.forEach(animal => animal.comer());
console.log("-------------------------------------------");
animales.forEach(animal => animal.desplazarse());
console.log("-------------------------------------------");
animales.forEach(animal => { if (animal instanceof (Carnivoro || Omnivoro)) animal.cazar() });