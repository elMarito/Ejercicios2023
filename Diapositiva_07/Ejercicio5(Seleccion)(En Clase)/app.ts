// Diapositiva 7 - Ejercicios - En Clase
// Ejercicio 5
// Crear proyecto NPM
// Subir proyecto a GitHub
// Implementar una Selección de Fútbol, conformada por Futbolistas, Entrenador y Masajista. 
// Cada integrante posee nombre, apellido, numero de pasaporte y fecha de nacimiento.
// Aplicar herencia donde sea posible.
//=============================================================================
import { Entrenador } from "./entrenador";
import { Futbolista } from "./futbolista";
import { Masajista } from "./masajista";
import { Persona } from "./persona";
import { Seleccion } from "./seleccion";
//-----------------------------------------------------------------------------



// WORK IN PROGRESS.------------------



const miSelccion: Seleccion = new Seleccion("sdf"
, new Entrenador("jose","pequerman","123"))

miSelccion.incorporarFutbolista(new Futbolista("jug1","messi","abc2"))
miSelccion.incorporarFutbolista(new Futbolista("jug1","messi","abc2"))
miSelccion.incorporarFutbolista(new Futbolista("jug1","messi","abc2"))
miSelccion.incorporarFutbolista(new Futbolista("jug1","messi","abc2"))
miSelccion.incorporarFutbolista(new Futbolista("jug1","messi","abc2"))

miSelccion.presentarListaDeJugadores();

miSelccion.jugarPartido();

// WORK IN PROGRESS.------------------