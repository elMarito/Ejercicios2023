import { Carnivoro } from "./carnivoro";
//-----------------------------------------------------------------------------
// esta seria una clase ideal para implementar interfacer omnivoro deveria 
// implementar las interfaces de Carnivo y Hervivoro. (Aun no vimos interfaces)
export class Omnivoro extends Carnivoro {
    //-------------------------------------------------------------------------
    constructor(nombre: string, habitats: string[], cuadrupedo: boolean
        , vuela: boolean, cazador: boolean = true) {
        super(nombre, habitats, cuadrupedo, vuela, cazador)
        this.comidas.push("Vegetales");
    }
    //-------------------------------------------------------------------------
    public cazar(): void {
        console.log(`El/la ${this.getNombre()}`,
            (this.cazador ? "es Cazador." : "no caza, solo como carroña.")
        )
    }
}