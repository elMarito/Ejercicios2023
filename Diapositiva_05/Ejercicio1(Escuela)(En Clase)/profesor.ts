// Diapositiva 5 - Ejercicios - En Clase
// Ejercicio 1
// Aplicar lo visto hasta esta clase para modelar un sistema educativo donde:
//  Los profesores deben tener un listado de sus alumnos.
// Cada alumno debe saber su nota e informar si está aprobado o no 
//  (es decir si la nota es mayor que 7). 
// La escuela debe tener un registro de los alumnos y maestros, 
//  y debe poder matricular/contratar y expulsar/despedir a los mismos.
//=========================================================================
import { Alumno } from "./alumno"
//-------------------------------------------------------------------------
export class Profesor {
    //caracteristicas: 
    private nombre: string;
    private dni: string;
    private alumnos: Alumno[]; // = new Array();
    //    private diasDeClase: string[]; // = new Array();
    //-------------------------------------------------------------------------
    //Geter y Seters
    public getNombre(): string { return this.nombre; }
    public setNombre(value: string): void { this.nombre = value; }
    public getDni(): string { return this.dni; }
    public setDni(value: string): void { this.dni = value; }
    //-------------------------------------------------------------------------
    public constructor(nombre: string, dni: string) {
        this.nombre = nombre;
        this.dni = dni;
        this.alumnos = new Array();
    }
    //-------------------------------------------------------------------------
    //La funcionalidad de la clase debe ser:
    public asignarAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }
    public desasignarAlumno(alumnoDNI: string): void {
        const indice = this.alumnos.findIndex(alumn => alumn.getDni() === alumnoDNI)
        if (indice >= 0) {
            console.log(`${this.alumnos[indice].getNombre()} ha sido quitado del profesor ${this.nombre}.`);
            this.alumnos.splice(indice, 1);
        }
    }
}