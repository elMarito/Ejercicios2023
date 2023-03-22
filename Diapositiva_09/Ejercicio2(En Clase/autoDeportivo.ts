import { Vehiculo } from "./vehiculo";
//-----------------------------------------------------------------------------
export class AutoDeportivo extends Vehiculo {
    private precio: number;
    private velocidadMaximaKM: number;
    public constructor(patente: string, precio: number, velocidadMaximaKM: number, tipoNeumatico: string) {
        super(patente, "grande", 2, tipoNeumatico);
        this.precio = precio;
        this.velocidadMaximaKM = velocidadMaximaKM;
    }
    public setPrecio(precio: number): number {
        return this.precio = precio;
    }
    //override del método
    public getInfo(): void {
        console.log(`
        Auto Deportivo
        Patente   | Motor   | Tipo de Neumaticos | Plazas
        ${this.patente} | ${this.motor}  | ${this.tipoNeumatico}     | ${this.plazas}        
        Velocidad Maxima (en KM/h).: ${this.velocidadMaximaKM}
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