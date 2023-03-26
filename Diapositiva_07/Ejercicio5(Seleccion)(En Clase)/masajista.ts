import { Futbolista } from "./futbolista";
import { Persona } from "./persona";
//-----------------------------------------------------------------------------
export class Masajista extends Persona {
     constructor(nombre: string, apellido: string, numeroDePasaporte: string, fechaDeNacimiento?: Date) {
        super(nombre, apellido, numeroDePasaporte, fechaDeNacimiento)
    }
    //-------------------------------------------------------------------------
    public masajear(jugador: Futbolista): void { console.log(`masajear a fulano.`); }
    public vendar(jugador: Futbolista): void { console.log(`vendar a fulano.`); }
    // public evaluarLesion(jugador: Futbolista): void {jugador.estaLesionado() }
    // public seLesionoFutbolista(jugador: Futbolista): void {jugador.estaLesionado() }
    // public darDeAltaFutbolista(jugador: Futbolista): void {jugador.seRecupero() }
}