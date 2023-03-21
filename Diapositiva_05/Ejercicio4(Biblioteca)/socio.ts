
//nombre, apellido y dni

//=============================================================================
import { Libro } from "./libro";
//-----------------------------------------------------------------------------
export class Socio {
    private nombre: string;
    private apellido: string;
    private dni: string;
    private libros: number[]; //<--indice del array de libros.   Libro[];
    //-------------------------------------------------------------------------
    public constructor(nombre: string, apellido: string, dni: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.libros = new Array() //(libros === undefined) ? new Array() : libros;
    }
    //-------------------------------------------------------------------------
    public getNombre(): string { return this.nombre; }
    public setNombre(value: string): void { this.nombre = value; }
    public getApellido(): string { return this.apellido; }
    public setApellido(value: string): void { this.apellido = value; }
    public getDni(): string { return this.dni; }
    public setDni(value: string): void { this.dni = value; }
    //-------------------------------------------------------------------------
    public retirarLibro(indiceLibro: number) {
        this.libros.push(indiceLibro);
    }
    public devolverLibro(indiceLibro: number) {
        if (indiceLibro >= 0) {
            // eliminar el indice del listado de libros del socio
            //            console.log(`${this.libros[indiceLibro].getNombre()} ha sido devuelto ${this.nombre}.`);
            this.libros.splice(this.libros.indexOf(indiceLibro), 1);
        }
    }
    public libroEstaDisponible(libro: Libro): boolean {
        return libro.estaDisponible()
    }
}