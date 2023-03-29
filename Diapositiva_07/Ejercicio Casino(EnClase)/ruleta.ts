import { JuegoDeCasino } from "./juegoDeCasino";
//-----------------------------------------------------------------------------
export class Ruleta extends JuegoDeCasino {
    private girando: boolean;
    private nroSalidos: number[];
    //-----------------------------------------------------------------------------
    public constructor(mesa: number, pApuestaMin: number, pCantidadJugadores: number) {
        super(mesa, pApuestaMin, pCantidadJugadores);

        this.nroSalidos = [];
        this.girando = false;
    }
    //-----------------------------------------------------------------------------
    // abrir mesa
    // aceptando apuestas (y jugadores)
    // iniciarGiro (detener apuestas)
    // lanzarBola
    // leerResultado.
    // levantarApuestas
    // pagar Premio

    public iniciarJuego(): void { console.log(`Juego de ruleta iniciado.`); }
    public detenerJuego(): void { console.log(`Juego de ruleta detenido.`); }
    public aceptarApuestas(): void { console.log(`Aceptando Apuestas de ruleta.`); }
    public pagarApuestas(): void { console.log(`Pagando Apuestas de ruleta.`); }

    public abrirMesa(): void {
        console.log(`Ruleta girando. Aceptando apuestas.`);
    }
    private iniciarGiro(): void {
        console.log(`Ruleta girando. Aceptando apuestas.`);
    }
    private detenerGiro(): void {
        console.log(`Ruleta girando. No mas apuestas.`);
    }
    private lanzarBola(): void {
        console.log(`Bolilla en juego...`);
    }
    public leerResultado(): void {
        console.log(`Leyendo el nro sorteado.`);
    }
    public getUltimoNro(): number {
        return this.nroSalidos[this.nroSalidos.length];
    }

}
