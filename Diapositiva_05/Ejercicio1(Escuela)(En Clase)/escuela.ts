// Diapositiva 5 - Ejercicios - En Clase
// Ejercicio 1
// Aplicar lo visto hasta esta clase para modelar un sistema educativo donde:
//  Los profesores deben tener un listado de sus alumnos.
// Cada alumno debe saber su nota e informar si está aprobado o no 
//  (es decir si la nota es mayor que 7). 
// La escuela debe tener un registro de los alumnos y maestros, 
//  y debe poder matricular/contratar y expulsar/despedir a los mismos.
//=============================================================================
import { Alumno } from "./alumno";
import { Profesor } from "./profesor";
//-----------------------------------------------------------------------------
class Escuela {
    private nombre: string;
    private alumnos: Alumno[]; // = new Array();
    private profesores: Profesor[]; // = new Array();
    //-------------------------------------------------------------------------
    public constructor(nombre: string) {
        this.nombre = nombre;
        this.alumnos = new Array();
        this.profesores = new Array();
    }
    //Manejar Alumnos----------------------------------------------------------
    public matricular(alumno: Alumno): void {
        // Se podria chequear que no exista para agregarlo.....
        this.alumnos.push(alumno);
    }
    public expulsar(alumnoDNI: string): void {
        const indice: number = this.alumnos.findIndex(alumn => alumn.getDni() === alumnoDNI);
        if (indice >= 0) {
            console.log(`${this.alumnos[indice].getNombre()} ha sido expulsado/a.`);
            this.alumnos.splice(indice, 1);
            //recorrer todos los profesores y desasignar el alumno de cada profesor que lo tenga
            this.profesores.forEach(profe => { profe.desasignarAlumno(alumnoDNI) });
        }
    }
    //Manejar Profesores-------------------------------------------------------
    public contratar(profesor: Profesor): void {
        // Se podria chequear que no exista para agregarlo.....
        this.profesores.push(profesor);
    }
    public despedir(profesorDNI: string): void {
        const indice: number = this.profesores.findIndex(profe => profe.getDni() === profesorDNI)
        if (indice >= 0) {
            console.log(`${this.profesores[indice].getNombre()} ha sido despedido/a.`);
            this.profesores.splice(indice, 1);
        }
    }
    //-------------------------------------------------------------------------
    public verProfesores(): void {
        console.log(` Profesores--------------------`);
        console.table(this.profesores)
    }
    public verAlumnos(): void {
        console.log(` Alumnos--------------------`);
        console.table(this.alumnos)
    }
    public verEscuela(): void {
        console.log(` INTEGRANTES DE LA ESCUELA: "${this.nombre}"`);
        this.verProfesores();
        this.verAlumnos()
    }
    public esAlumno(dni: string): boolean {
        return (this.alumnos.find(alumn => alumn.getDni() === dni) !== undefined);
    }
    //-------------------------------------------------------------------------
    public asignarAlumnoAProfesor(alumno: Alumno, profesor: Profesor): void {
        const indice = this.profesores.findIndex(profe => profe.getDni() === profesor.getDni())
        // buscar profesor y si existe agregarle el alumno
        if (indice >= 0) this.profesores[indice].asignarAlumno(alumno);
    }
}
//=============================================================================

const escuela = new Escuela("de Tandil");

let profesor1 = new Profesor("Matias Villalobo", "10101010");
let profesor2 = new Profesor("Marcelo Bettini", "11001100");
let profesor3 = new Profesor("Viviana", "11111111");
let profesor4 = new Profesor("Braian Aued", "11100011");

escuela.contratar(profesor1);
escuela.contratar(profesor2);
escuela.contratar(profesor3);
escuela.contratar(profesor4);

let alumno1 = new Alumno("bart", "123");
let alumno2 = new Alumno("lisa", "124");
let alumno3 = new Alumno("magui", "125");

escuela.matricular(alumno1);
escuela.matricular(alumno2);
escuela.matricular(alumno3);

//    asi no:   profesor1.asignarAlumno(alumno1)
escuela.asignarAlumnoAProfesor(alumno1, profesor1); //asi si
escuela.asignarAlumnoAProfesor(alumno2, profesor1); //asi si
escuela.asignarAlumnoAProfesor(alumno3, profesor1); //asi si
//-----------------------------------------------------------------------------
escuela.verEscuela();

escuela.expulsar("123");

escuela.despedir("11111111");

escuela.verEscuela();
