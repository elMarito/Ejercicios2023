//=============================================================================
import { Telefono } from "./telefono";
//-----------------------------------------------------------------------------
export class TelefonoConRadio extends Telefono {
    private frecuenciaActual: number;
    //-------------------------------------------------------------------------
    constructor() {
        super()
        this.frecuenciaActual = 0;
    }
    //-------------------------------------------------------------------------
    //Geter y Seters
    public getFrecuenciaActual(): number { return this.frecuenciaActual; }
    public setFrecuenciaActual(value: number): void {
        if (this.estaPrendido) this.frecuenciaActual = value;
    }
    //-------------------------------------------------------------------------
    public verFrecuenciaActual() {
        if (this.estaPrendido) {
            console.log(`La frecuencia actual es: ${this.frecuenciaActual}`);
        }
    }
}