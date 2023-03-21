// Diapositiva 5 - Ejercicios - En Clase
// Ejercicio 4
// Crear clase biblioteca COMPLETA con 3 o 4 atributos que este compuesta por Libros
// Crear la clase Biblioteca. La misma estará compuesta por un listado de libros 
//  y por un listado de socios. Los socios estaran identificados por nombre, apellido y dni.
// Los libros estaran identificados por titulo, autor y tematica.
// Los socios podran retirar uno o mas libros, y tambien podran devolverlos.
// Los libros podran tener dos condiciones, disponible o no disponible.
// Incorporar las funcionalidades que consideren necesarias (libre)
//=============================================================================
import { Biblioteca } from "./biblioteca";
import { Libro } from "./libro";
import { Socio } from "./socio";
//-------------------------------------------------------------------------
const libros: Libro[] = [
    new Libro("Ray Bradbury", "Cronicas marcianas", "ciencia ficcion", "Futura"),
    new Libro("Eduardo Sacheri", "La noche de la Usina", "suspenso", "Alfaguara"),
    new Libro("Edgar Allan Poe", "Corazon delator", "terror", "Darkside")
]

const biblioteca: Biblioteca = new Biblioteca("biblioteca 25 de Mayo", "Rivadavia...",
    "2244-123245", "mi barrio", libros)
biblioteca.getInfo()
//-------------------------------------------------------------------------
// Agrego nuevos socios a la biblioteca
biblioteca.addSocio(new Socio("homero", "simpson", "1000"));
biblioteca.addSocio(new Socio("lisa", "simpson", "1001"));
biblioteca.addSocio(new Socio("bart", "simpson", "1002"));

biblioteca.addLibro(new Libro("Quino", "Mafalda", "humor", "EDICIONES DE LA FLOR"))

biblioteca.getInfo()
//-------------------------------------------------------------------------

let unLibro: Libro = biblioteca.buscarLibro("casiari", "nose", "futbol") as Libro
biblioteca.entregarLibroASocio(unLibro, "1001"); //intento prestar un libro que no tenemos
unLibro = biblioteca.buscarLibro("Quino", "Mafalda", "humor") as Libro
biblioteca.entregarLibroASocio(unLibro, "1001"); //presto un libro

console.table(unLibro);
biblioteca.entregarLibroASocio(unLibro, "1002");// intento prestar el mismo libro

//-------------------------------------------------------------------------
biblioteca.recibirLibroDeSocio(unLibro, "1001");  //devuelven un libro
console.table(unLibro);
//biblioteca.getInfo()
