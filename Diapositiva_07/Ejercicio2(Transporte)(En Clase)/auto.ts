import { Transporte } from "./transporte";
//-----------------------------------------------------------------------------
export class Auto extends Transporte {

    public constructor(patente: string, motor: string, autonomiaKM: number) {
        super(patente, motor, autonomiaKM, 4, 4)
    };
    //-------------------------------------------------------------------------
};