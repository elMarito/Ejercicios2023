import { Vehiculo } from "./vehiculo";
//-----------------------------------------------------------------------------
export class Camioneta extends Vehiculo {
    private precio: number;
    private capacidadCajaKG: number;
    public constructor(patente: string, precio: number, capacidadCajaKG: number, tipoNeumatico: string) {
        super(patente, "mediano", 4, tipoNeumatico);
        this.precio = precio;
        this.capacidadCajaKG = capacidadCajaKG;
    }
    public setPrecio(precio: number): number {
        return this.precio = precio;
    }
    //override del método    
    public getInfo(): void {
        console.log(`
        Camioneta
        Patente   | Motor   | Tipo de Neumaticos | Plazas
        ${this.patente} | ${this.motor} | ${this.tipoNeumatico}     | ${this.plazas}
        Capacidad de la Caja (en KG).: ${this.capacidadCajaKG}
        ----------------------------------------`)
        // Patente...: ${this.patente}
        // Motor: ${this.motor}
        // Tipo de Neumaticos: ${this.tipoNeumatico}
        // Plazas.: ${this.plazas}
    }
    //override del método
    public getPatente(): string {
        return this.getPatente();
    }
}