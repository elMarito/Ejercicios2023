export class Vehiculo {
    private patente: string;
    private marca: string;
    private modelo: string;
    private motor: string; 
    private cantidadDeGomas: number;
    //    protected tipoNeumatico: string
    //     protected plazas: number;
    //-------------------------------------------------------------------------
    public constructor(patente: string, marca: string, modelo: string, motor: string, cantidadDeGomas: number) {
        this.patente = patente.toLocaleUpperCase();
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
        this.cantidadDeGomas = cantidadDeGomas;
    }
    //-------------------------------------------------------------------------
    public getPatente(): string { return this.patente; }
    public setPatente(value: string): void { this.patente = value.toLocaleUpperCase(); }
    //-------------------------------------------------------------------------
    // public getInfo(): void {
    //     console.log(`
    //   -----------------------
    //     DATOS DEL VEHÍCULO
    //   -----------------------
    //   Patente    : ${this.patente} 
    //   Marca      : ${this.marca} 
    //   Modelo     : ${this.modelo}
    //   Motor      : ${this.motor}
    //   Neumaticos : ${this.cantidadDeGomas}
    //   `);
    // }
}