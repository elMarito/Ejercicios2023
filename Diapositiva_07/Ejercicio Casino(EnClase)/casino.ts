import { JuegoDeCasino } from "./juegoDeCasino";
// import { Blackjack } from "./blackJack";
// import { Ruleta } from "./ruleta";
//-----------------------------------------------------------------------------
export class Casino {
    private nombre: string;
    private direccion: string;
    private localidad: string;
    private juegos: JuegoDeCasino[];
    //-------------------------------------------------------------------------
    constructor(nombre: string, direccion: string, localidad: string, juegos: JuegoDeCasino[]) {
        this.nombre = nombre
        this.direccion = direccion
        this.localidad = localidad
        this.juegos = juegos;
    }
    //-------------------------------------------------------------------------
    public getNombre(): string { return this.nombre }
    public setNombre(pnombre: string): void { this.nombre = pnombre }
    public getDirecion(): string { return this.direccion }
    public setDireccion(pdireccion: string): void { this.direccion = pdireccion }
    public getLocalidad(): string { return this.localidad }
    public setLocalidad(plocalidad: string): void { this.localidad = plocalidad }
    //-------------------------------------------------------------------------
    public agregarJuego(juego: JuegoDeCasino): void { this.juegos.push(juego) }
    public Jugar(juego: JuegoDeCasino): void { this.juegos.push(juego) }
}