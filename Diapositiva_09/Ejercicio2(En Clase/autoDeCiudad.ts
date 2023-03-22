import { Vehiculo } from "./vehiculo";
//-----------------------------------------------------------------------------
export class AutoCiudad extends Vehiculo {
    private precio: number;
    public constructor(patente: string, precio: number, tipoNeumatico: string) {
        super(patente, "chico", 4, tipoNeumatico);
        this.precio = precio;
    }
    public setPrecio(precio: number): number {
        return this.precio = precio;
    }
    public getPlazas(): string {
        return this.getPlazas();
    }
    //override del método
    public getPatente(): string {
        return this.getPatente();
    }
    //override del método
    public getInfo(): void {
        console.log(`
        Auto de Ciudad
        Patente   | Motor   | Tipo de Neumaticos | Plazas
        ${this.patente} | ${this.motor}   | ${this.tipoNeumatico}     | ${this.plazas}
        ----------------------------------------`)
        // Patente...: ${this.patente}
        // Motor: ${this.motor}
        // Tipo de Neumaticos: ${this.tipoNeumatico}
        // Plazas.: ${this.plazas}

    }
}