// work in progress
export class Transporte {
//    private radioDeGiro: number;
    private patente: string;
    private motor: string;
    protected plazas: number;
    protected cantidadNeumaticos: number;
    private autonomiaKM: number;
    protected velocidad: number;
    private orientacion: number;
    public constructor(patente: string, motor: string, autonomiaKM: number,plazas: number,cantidadNeumaticos: number) {
        this.patente = patente;
        this.motor = motor;
        this.plazas = plazas;
        this.cantidadNeumaticos = cantidadNeumaticos;
        this.autonomiaKM = autonomiaKM;
        this.velocidad = 0;
        this.orientacion = 0;
    };
    //-------------------------------------------------------------------------
    public getPatente(): string { return this.patente; }
    //    public  getInfo(): void;
    public acelerar(): number {
        return this.velocidad++
    }
    public frenar() {
        return this.velocidad = 0
    }
    public doblar(grados: number, haciaLaDerecha: boolean) {
        if (haciaLaDerecha) this.orientacion += grados
        else this.orientacion -= grados;
    }
};
