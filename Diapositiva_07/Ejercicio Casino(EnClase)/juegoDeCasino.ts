/*
import { Blackjack } from "./blackJack";
import { Juego } from "./juego";
import { Ruleta } from "./ruleta";
*/
//-----------------------------------------------------------------------------
export class JuegoDeCasino {
    private mesa: number;
    private banca: number;
    protected apuestaMinima: number;
    protected apuestaMaxima: number;
    private apuestas: string[];
    private jugadores: string[]; //: Jugador[]
    private croupier: string;
    //-------------------------------------------------------------------------
    constructor(mesa: number, apuestaMinima: number, apuestaMaxima: number) {
        this.mesa = mesa;
        this.banca = 0;
        this.apuestaMinima = apuestaMinima; //100;
        this.apuestaMaxima = apuestaMaxima; //10000;
        this.apuestas = [];
        this.jugadores = [];
    }
    //-------------------------------------------------------------------------
    public getApuestaMin(): number { return this.apuestaMinima }
    public setApuestaMin(ApuestaMin: number): void { this.apuestaMinima = ApuestaMin }
    public getApuestaMax(): number { return this.apuestaMaxima }
    public setApuestaMax(apuestaMax: number): void { this.apuestaMaxima = apuestaMax }

    public agregarJugador(jugador: string): void { this.jugadores.push(jugador); }
    public quitarJugador(jugador: string): void { console.log(`EliminandoJugador.`); }
    public getCantidadJUgadores(): number { return this.jugadores.length; }

    public iniciarJuego(): void { console.log(`Juego iniciado.`); }
    public detenerJuego(): void { console.log(`Juego detenido.`); }
    public aceptarApuestas(): void { console.log(`Aceptando Apuestas.`); }
    public pagarApuestas(): void { console.log(`Pagando Apuestas.`); }
}
