// Diapositiva 5 - Ejercicios - En Clase
// Ejercicio 1
// Aplicar lo visto hasta esta clase para modelar un sistema educativo donde:
//  Los profesores deben tener un listado de sus alumnos.
// Cada alumno debe saber su nota e informar si está aprobado o no 
//  (es decir si la nota es mayor que 7). 
// La escuela debe tener un registro de los alumnos y maestros, 
//  y debe poder matricular/contratar y expulsar/despedir a los mismos.
//=============================================================================
export class Alumno {
    readonly NOTA_MINIMA_PARA_APROBAR: number = 7
    //-------------------------------------------------------------------------
    private nombre: string;
    private dni: string;
    private nota: number;
    //-------------------------------------------------------------------------
    public constructor(nombre: string, dni: string) {
        this.nombre = nombre;
        this.dni = dni;
        this.nota = 0;
    }
    //-------------------------------------------------------------------------
    public getNombre(): string { return this.nombre; }
    public setNombre(value: string): void { this.nombre = value; }
    public getDni(): string { return this.dni; }
    public setDni(value: string): void { this.dni = value; }
    public getNota(): number { return this.nota; }
    public setNota(value: number): void { this.nota = value; }
    //-------------------------------------------------------------------------
    public estaAprobado(): boolean {
        return (this.nota > this.NOTA_MINIMA_PARA_APROBAR);
    }
}