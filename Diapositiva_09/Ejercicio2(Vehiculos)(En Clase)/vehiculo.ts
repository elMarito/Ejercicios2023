export abstract class Vehiculo {
    protected patente: string;
    protected marca: string;
    protected modelo: string;
    protected motor: string;
    protected plazas: number;
    protected velocidad: number;
    protected velocidadMaximaKM: number;
    //-------------------------------------------------------------------------
    public constructor(patente: string, marca: string, modelo: string
        , motor: string, plazas: number,velocidadMaximaKM:number=150) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
        this.plazas = plazas
        this.velocidad = 0;
        this.velocidadMaximaKM= velocidadMaximaKM;
    };
    //-------------------------------------------------------------------------
    public abstract acelerar(n: number): void; //{ return this.velocidad += n; }
    public abstract desacelerar(n: number): void; //{ return this.velocidad -= n; }
    public abstract getInfo(): void;    // {
    //     console.log(`
    //   -----------------------
    //     DATOS DEL VEHÍCULO
    //   -----------------------
    //   Patente    : ${this.patente} 
    //   Marca      : ${this.marca} 
    //   Modelo     : ${this.modelo}
    //   Motor      : ${this.motor}
    //   Plazas     : ${this.plazas}
    //   `);
    // }
    //-------------------------------------------------------------------------
    // metodos implementados.
    public getPatente(): string { return this.patente; }
    public getPlazas(): number { return this.plazas; }
    public getVelocidad(): number { return this.velocidad; }
    // public setPrecio(precio: number): number { return this.precio = precio; }
};
