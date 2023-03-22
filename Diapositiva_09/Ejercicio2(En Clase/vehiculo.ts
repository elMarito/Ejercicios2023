//-----------------------------------------------------------------------------
export abstract class Vehiculo {
    protected patente: string;
    protected motor: string;
    protected tipoNeumatico: string;
    protected plazas: number;
    public constructor(patente: string, motor: string, plazas: number, tipoNeumatico: string) {
        this.patente = patente;
        this.motor = motor;
        this.plazas = plazas
        this.tipoNeumatico = tipoNeumatico;
    };
    public abstract getPatente(): string;
    public abstract getInfo(): void;
};
