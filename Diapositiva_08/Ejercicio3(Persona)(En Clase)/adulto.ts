import { Persona } from "./persona";
//-----------------------------------------------------------------------------
export class Adulto extends Persona {
    //-------------------------------------------------------------------------
    constructor(nombre: string, apellido: string, numeroDePasaporte: string, fechaDeNacimiento?: Date) {
        super(nombre, apellido, numeroDePasaporte, fechaDeNacimiento)
        this.distanciaPasoMts = 50;
    }
    //-------------------------------------------------------------------------
    public caminar(): void { console.log(`El Adulto avanza ${this.distanciaPasoMts} metros caminando.`) }
    public correr(): void { console.log(`El Adulto avanza ${this.distanciaPasoMts * 2} metros corriendo.`) }
}