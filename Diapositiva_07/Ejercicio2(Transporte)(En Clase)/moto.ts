import { Transporte } from "./transporte";
//-----------------------------------------------------------------------------
export class Moto extends Transporte {

    public constructor(patente: string, motor: string, autonomiaKM: number) {
        super(patente, motor, autonomiaKM, 2, 2)
    };
    //-------------------------------------------------------------------------
    public acelerar(): number { return this.velocidad += 2 }
};