import { Vehiculo } from "./vehiculo";
//-----------------------------------------------------------------------------
export class Moto extends Vehiculo {
    public constructor(patente: string, marca: string, modelo: string, motor: string) {
        super(patente, marca, modelo, motor, 2);

    }
}