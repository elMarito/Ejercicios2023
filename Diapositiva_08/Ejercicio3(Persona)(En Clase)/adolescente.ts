import { Persona } from "./persona";
//-----------------------------------------------------------------------------
export class Adolescente extends Persona {
    //-------------------------------------------------------------------------
    constructor(nombre: string, apellido: string, numeroDePasaporte: string, fechaDeNacimiento?: Date) {
        super(nombre, apellido, numeroDePasaporte, fechaDeNacimiento)
        this.distanciaPasoMts = 60;
    }
    //-------------------------------------------------------------------------
    public caminar(): void { console.log(`El adolescente avanza ${this.distanciaPasoMts} metros caminando.`) }
    public correr(): void { console.log(`El adolescente avanza ${this.distanciaPasoMts * 2} metros corriendo.`) }
}