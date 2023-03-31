import { Vehiculo } from "./vehiculo";
//-----------------------------------------------------------------------------
export class AutoCiudad extends Vehiculo {
    private readonly coeficiente: number=1.1;
    public constructor(patente: string, marca: string, modelo: string
        , motor: string) {
        super(patente, marca, modelo, "chico", 4, 160);
    }
    //-------------------------------------------------------------------------
    //override de los métodos
    public getInfo(): void {
        console.log(`
          -----------------------
            DATOS DEL AUTO DE CIUDAD
          -----------------------
          Patente    : ${this.patente} 
          Marca      : ${this.marca} 
          Modelo     : ${this.modelo}
          Motor      : ${this.motor}
          Plazas     : ${this.plazas}
          VELOCIDAD  : ${this.velocidad}<----------------------
          `);
    }
    public acelerar(n: number): void {
        console.log(`Acelerando ${n * this.coeficiente} +++++++++`);
        this.velocidad += n * this.coeficiente;
    }
    public desacelerar(n: number): void {
        console.log(`Desacelerando ${n * this.coeficiente} -------`);
        this.velocidad -= n * this.coeficiente;
    }
}