import { Vehiculo } from "./vehiculo";
//-----------------------------------------------------------------------------
export class AutoDeportivo extends Vehiculo {
    private readonly coeficiente: number=1.5;
    public constructor(patente: string, marca: string, modelo: string
        , motor: string, velocidadMaximaKM: number) {
        super(patente, marca, modelo, "grande", 2, velocidadMaximaKM);
        this.velocidadMaximaKM = velocidadMaximaKM;
    }
    //-------------------------------------------------------------------------
    //override de los métodos
    public getInfo(): void {
        console.log(`
          -----------------------
            DATOS DEL VEHÍCULO
          -----------------------
          Patente    : ${this.patente} 
          Marca      : ${this.marca} 
          Modelo     : ${this.modelo}
          Motor      : ${this.motor}
          Plazas     : ${this.plazas}
          VELOCIDAD  : ${this.velocidad}<----------------------
          Velocidad Maxima (en KM/h).: ${this.velocidadMaximaKM}
          `);
    }
    public acelerar(n: number): void {
        console.log(`Acelerando ${n * this.coeficiente} +++++++++`);
        this.velocidad += n * this.coeficiente;
    }
    public desacelerar(n?: number): void {
        if (n === undefined) {
            console.log(`Desacelerando ${this.velocidad} -------`);
            this.velocidad -= this.velocidad;
        }
        else {
            console.log(`Desacelerando ${n * this.coeficiente} -------`);
            this.velocidad -= n * this.coeficiente;
        }
    }
    //-------------------------------------------------------------------------
    // Metodo propio.
    public turbo(): number {
        return this.velocidad += 50;
    }
}