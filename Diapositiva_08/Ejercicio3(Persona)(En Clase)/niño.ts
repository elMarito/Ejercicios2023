import { Persona } from "./persona";
//-----------------------------------------------------------------------------
export class Niño extends Persona {
    //-------------------------------------------------------------------------
    constructor(nombre: string, apellido: string, numeroDePasaporte: string, fechaDeNacimiento?: Date) {
        super(nombre, apellido, numeroDePasaporte, fechaDeNacimiento)
        this.distanciaPasoMts = 30;
    }
    //-------------------------------------------------------------------------
    public caminar(): void { console.log(`El niño avanza ${this.distanciaPasoMts} metros caminando.`) }
    public correr(): void { console.log(`El niño avanza ${this.distanciaPasoMts * 2} metros corriendo.`) }
}