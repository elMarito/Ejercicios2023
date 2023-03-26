import { Mamifero } from "./mamifero";
//-----------------------------------------------------------------------------
export class Carnivoro extends Mamifero {
    protected cazador: boolean;
    //-------------------------------------------------------------------------
    constructor(nombre: string, habitats: string[], cuadrupedo: boolean
        , vuela: boolean, cazador: boolean = true) {
        super(nombre, habitats, cuadrupedo, vuela)
        this.comidas.push("Animales");
        this.cazador = cazador;
    }
    //-------------------------------------------------------------------------
    public cazar(): void {
        console.log(`El/la ${this.getNombre()}`,
            (this.cazador ? "es Cazador." : "no caza, solo como carroña.")
        )
    }
}