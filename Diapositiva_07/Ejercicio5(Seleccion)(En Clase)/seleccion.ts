import { Entrenador } from "./entrenador";
import { Futbolista } from "./futbolista";
import { Masajista } from "./masajista";
import { Persona } from "./persona";
//-----------------------------------------------------------------------------
export class Seleccion {
    private pais: string;
    private entrenador: Entrenador;
    private masajista: Masajista;
    private futbolistas: Futbolista[];
    //-------------------------------------------------------------------------
    constructor(pais: string, entrenador: Entrenador, masajista?: Masajista, jugadores?: Futbolista[]) {
        this.pais = pais;
        this.entrenador = entrenador;
        if (masajista !== undefined) this.masajista = masajista;
        // this.jugadores = numeroDePasaporte;
    }
    //-------------------------------------------------------------------------
    public getPais(): string { return this.pais; }
    public setPais(value: string): void { this.pais = value; }
    public getEntrenador(): Entrenador { return this.entrenador; }
    public setEntrenador(value: Entrenador): void { this.entrenador = value; }
    // public getNumeroDePasaporte(): string { return this.numeroDePasaporte; }
    // public setNumeroDePasaporte(value: string): void { this.numeroDePasaporte = value; }
    // public getFechaDeNacimiento(): Date { return this.fechaDeNacimiento; }
    // public setFechaDeNacimiento(value: Date): void { this.fechaDeNacimiento = value; }
    //-------------------------------------------------------------------------

    public incorporarFutbolistas(): void { 
        this.entrenador.armarEquipo
    }
    public incorporarFutbolista(jugador: Futbolista): void { }
    public darDeAltaFutbolista(jugador: Futbolista): void { }
    public jugarPartido(): void { }
    public presentarListaDeJugadores(): void { 
        this.entrenador.armarEquipo()
    }
}