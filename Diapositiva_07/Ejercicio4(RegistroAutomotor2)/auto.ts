import { Vehiculo } from "./vehiculo";
//-----------------------------------------------------------------------------
export class Auto extends Vehiculo {
  public constructor(patente: string, marca: string, modelo: string, motor: string) {
    super(patente, marca, modelo, motor, 4)

  }

}
