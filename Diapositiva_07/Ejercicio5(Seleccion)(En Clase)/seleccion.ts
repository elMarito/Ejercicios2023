import { Entrenador } from "./entrenador";
import { Futbolista } from "./futbolista";
import { Masajista } from "./masajista";
//-----------------------------------------------------------------------------
export class Seleccion {
    private pais: string;
    private entrenador: Entrenador;
    private masajista: Masajista;
    private futbolistas: Futbolista[];
    //-------------------------------------------------------------------------
    constructor(pais: string, entrenador: Entrenador, masajista?: Masajista, futbolistas?: Futbolista[]) {
        this.pais = pais;
        this.entrenador = entrenador;
        this.masajista = masajista as Masajista;
        this.futbolistas = (futbolistas !== undefined) ? futbolistas : [];
    }
    //-------------------------------------------------------------------------
    public getPais(): string { return this.pais; }
    public setPais(value: string): void { this.pais = value; }
    public getEntrenador(): Entrenador { return this.entrenador; }
    public setEntrenador(value: Entrenador): void { this.entrenador = value; }
    public getMasajista(): Masajista { return this.masajista; }
    public setMasajista(value: Masajista): void { this.masajista = value; }
    public getPlantel(): Futbolista[] { return this.futbolistas; }
    //-------------------------------------------------------------------------
    public incorporarFutbolista(jugador: Futbolista): void {
        this.futbolistas.push(jugador);
    }
    public eliminarFutbolista(jugador: Futbolista): void { /* implementar*/ }
    //    public darDeAltaFutbolista(jugador: Futbolista): void { }
    // public jugarPartidoCon(contrincante: Seleccion): void { }
    public jugarPartido(): void {
        console.log("Jugando....");
    }
}