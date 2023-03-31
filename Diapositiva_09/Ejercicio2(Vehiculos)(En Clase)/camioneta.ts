import { Vehiculo } from "./vehiculo";
//-----------------------------------------------------------------------------
export class Camioneta extends Vehiculo {
    private readonly coeficiente: number=1.3;
    private capacidadCajaKG: number;
    //-------------------------------------------------------------------------
    public constructor(patente: string, marca: string, modelo: string
        , motor: string, plazas: number, capacidadCajaKG: number) {
        super(patente, marca, modelo, motor, plazas);
        this.capacidadCajaKG = capacidadCajaKG;
    }
    //-------------------------------------------------------------------------
    //override de los métodos   
    public getInfo(): void {
        console.log(`
          -----------------------
            DATOS DE LA CAMIONETA
          -----------------------
          Patente    : ${this.patente} 
          Marca      : ${this.marca} 
          Modelo     : ${this.modelo}
          Motor      : ${this.motor}
          Plazas     : ${this.plazas}
          VELOCIDAD  : ${this.velocidad}<----------------------
          Capacidad de la Caja (en KG).: ${this.capacidadCajaKG}          
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
    //-------------------------------------------------------------------------
    // Metodos propio.
    public cargar(): void {
        console.log(`Cargar algo en la caja de la camioneta.`);
    }
    public descargar(): void {
        console.log(`Descargar algo en la caja de la camioneta.`);
    }

}