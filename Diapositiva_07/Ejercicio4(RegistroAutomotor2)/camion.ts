import { Vehiculo } from "./vehiculo";
//-----------------------------------------------------------------------------
export class Camion extends Vehiculo {
    private capacidadCajaKG: number;
    public constructor(patente: string, marca: string, modelo: string, motor: string, capacidadCajaKG: number) {
        super(patente, marca, modelo, motor, 4);
        this.capacidadCajaKG = capacidadCajaKG;
    }

    public getCapacidadCajaKG(): number {
        return this.capacidadCajaKG;
    }
}