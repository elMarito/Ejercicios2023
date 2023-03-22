import { Persona } from "./persona";
//-----------------------------------------------------------------------------
export class Futbolista extends Persona {
    // private nombre: string;
    // private apellido: string;
    // private numeroDePasaporte: string;
    // private fechaDeNacimiento: Date;
    private titular: boolean;
    private lesionado: boolean;
    //-------------------------------------------------------------------------
    constructor(nombre: string, apellido: string, numeroDePasaporte: string, fechaDeNacimiento?: Date) {
        super(nombre, apellido, numeroDePasaporte, fechaDeNacimiento)
        this.titular = false;
        this.lesionado = false;
        // this.nombre = nombre;
        // this.apellido = apellido;
        // this.numeroDePasaporte = numeroDePasaporte;
        // this.fechaDeNacimiento = (fechaDeNacimiento === undefined) ? new Date() : fechaDeNacimiento;
    }
    //-------------------------------------------------------------------------
    // public getNombre(): string { return this.nombre; }
    // public setNombre(value: string): void { this.nombre = value; }
    // public getApellido(): string { return this.apellido; }
    // public setApellido(value: string): void { this.apellido = value; }
    // public getNumeroDePasaporte(): string { return this.numeroDePasaporte; }
    // public setNumeroDePasaporte(value: string): void { this.numeroDePasaporte = value; }
    // public getFechaDeNacimiento(): Date { return this.fechaDeNacimiento; }
    // public setFechaDeNacimiento(value: Date): void { this.fechaDeNacimiento = value; }
    //-------------------------------------------------------------------------
    public esTitular(): boolean { return this.titular }
    public estaLesionado(): boolean { return this.lesionado }
    public seLesiono(): void { this.lesionado = true; }
    public seRecupero(): void { this.lesionado = false; }
    public jugarEnPosicion(posicion: string): void { }
    public jugar(): void { }
    public calentar(): void { }
}