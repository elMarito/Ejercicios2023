import { Auto } from "./auto";
//-----------------------------------------------------------------------------
export class AutoCarrera extends Auto {
    public constructor(marca: string, modelo: string) {
        super(marca, modelo);
    }
 
    public acelerar(): void {
        this.velocidadActual += 50;
    }
 }