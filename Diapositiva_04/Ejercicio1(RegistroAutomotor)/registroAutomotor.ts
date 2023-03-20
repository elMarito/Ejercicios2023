// Diapositiva 4 - Ejercicios - Fuera de Clase
// Ejercicio 1
// Usando la clase Auto: Implementar la clase RegistroAutomotor con métodos 
//  para consultar por un auto en un listado, borrar, actualizar y dar de alta
//=============================================================================
import { Auto } from "../Ejercicio2(Auto)/auto";
//-----------------------------------------------------------------------------
export class RegistroAutomotor {
    private nombre: string;
    private direccion: string;
    private telefono: string;
    private autos: Auto[];
    //-------------------------------------------------------------------------
    public constructor(nombre: string, direccion: string, telefono: string = "") {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.autos = new Array();
    }
    //-------------------------------------------------------------------------
    public getNombre(): string { return this.nombre; }
    public setNombre(value: string): void { this.nombre = value; }
    public getDireccion(): string { return this.direccion; }
    public setDireccion(value: string): void { this.direccion = value; }
    public getTelefono(): string { return this.telefono; }
    public setTelefono(value: string): void { this.telefono = value; }
    //-------------------------------------------------------------------------
    //Manejar autos------------------------------------------------------------
    public darDeAlta(auto: Auto): void {
        // Se podria chequear que no exista para agregarlo.....
        this.autos.push(auto);
    }
    public borrar(patenteAuto: string): void {
        const indice: number = this.buscar(patenteAuto);
        if (indice > -1) {
            console.log(`El auto patente: ${this.autos[indice].getPatente()} ha sido borrado.`);
            this.autos.splice(indice, 1);
        }
    }
    public consultar(patenteAuto: string): (Auto | undefined) {
        const indice: number = this.buscar(patenteAuto);
        return (indice > -1 ? this.autos[indice] : undefined)
    }
    public actualizar(patenteAuto: string, autoNuevo: Auto): void {
        const indice: number = this.buscar(patenteAuto);
        if (indice > -1) this.autos[indice] = autoNuevo;
    }
    public buscar(patenteAuto: string): number {
        patenteAuto = patenteAuto.toLocaleUpperCase();
        return this.autos.findIndex(auto => auto.getPatente() === patenteAuto);
    }
}