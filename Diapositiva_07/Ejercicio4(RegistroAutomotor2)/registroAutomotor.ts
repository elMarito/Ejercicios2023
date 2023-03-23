import { Vehiculo } from "./vehiculo";
//-----------------------------------------------------------------------------
export class RegistroAutomotor {
    private nombre: string;
    private direccion: string;
    private telefono: string;
    private vehiculos: Vehiculo[];
    //-------------------------------------------------------------------------
    public constructor(nombre: string, direccion: string, telefono: string = "") {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.vehiculos = new Array();
    }
    //-------------------------------------------------------------------------
    public getNombre(): string { return this.nombre; }
    public setNombre(value: string): void { this.nombre = value; }
    public getDireccion(): string { return this.direccion; }
    public setDireccion(value: string): void { this.direccion = value; }
    public getTelefono(): string { return this.telefono; }
    public setTelefono(value: string): void { this.telefono = value; }
    //-------------------------------------------------------------------------
    //Manejar Vehiculos--------------------------------------------------------
    public darDeAlta(vehiculo: Vehiculo): void {
        if (this.buscar(vehiculo.getPatente()) === -1) {
            this.vehiculos.push(vehiculo);
            console.log(`El vehiculo patente: ${vehiculo.getPatente()} se a incorporado al Registro.`);
        }
    }
    public borrar(patenteVehiculo: string): void {
        const indice: number = this.buscar(patenteVehiculo);
        if (indice > -1) {
            this.vehiculos.splice(indice, 1);
            console.log(`El vehiculo patente: ${patenteVehiculo} ha sido borrado.`);
        }
    }
    public consultar(patenteVehiculo: string): (Vehiculo | undefined) {
        const indice: number = this.buscar(patenteVehiculo);
        if (indice > -1) return this.vehiculos[indice]

        console.log(`No existe un vehiculo con la patente: ${patenteVehiculo}.`);
        return undefined      //<- esta linea se podria eliminar? creo q si.
    }
    public actualizar(patenteVieja: string, autoNuevo: string): void {
        const indice: number = this.buscar(patenteVieja);
        if (indice > -1) {
            this.vehiculos[indice].setPatente(autoNuevo);
            console.log(`La patente: ${patenteVieja} ha sido reemplazada por ${autoNuevo}.`);
        }else{
            console.log(`ERROR! No se puede actualizar. No existe un vehiculo con la patente: ${patenteVieja} .`);
        }
    }
    private buscar(patenteVehiculo: string): number {
        patenteVehiculo = patenteVehiculo.toLocaleUpperCase();
        return this.vehiculos.findIndex(auto => auto.getPatente() === patenteVehiculo);
    }
}