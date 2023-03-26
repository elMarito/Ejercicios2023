import { Mamifero } from "./mamifero";
//-----------------------------------------------------------------------------
export class Herviboro extends Mamifero {
    //-------------------------------------------------------------------------
    constructor(nombre: string, habitats: string[], cuadrupedo: boolean
        , vuela: boolean) {
        super(nombre, habitats, cuadrupedo, vuela)
        this.comidas.push("Vegetales");
    }
    //-------------------------------------------------------------------------
}