import { JuegoDeCasino } from "./juegoDeCasino";
//-----------------------------------------------------------------------------
export class BlackJack extends JuegoDeCasino {
    //    private cantidadCartas:number;
    private cartas: string[]; //Carta[];
    private cartasEnJuego: string[]; //Carta[];
    //    private apuestaMinima: number;
    public constructor(mesa: number, pApuestaMin: number, pCantidadJugadores) {
        super(mesa, pApuestaMin, pCantidadJugadores);
        this.cartas = ["a1", "b1", "c1", "d1","a2","b2","c2","d3......"]; //{ new Mazo() }
        //        this.cartas = { new Carta(1, palo.Oro) }
        this.cartasEnJuego = [];
        //      this.cantidadCartas = 20
    }
    public iniciarJuego(): void { console.log(`Juego de BlackJack iniciado.`); }
    public detenerJuego(): void { console.log(`Juego de BlackJack detenido.`); }
    public aceptarApuestas(): void { console.log(`Aceptando Apuestas de BlackJack.`); }
    public pagarApuestas(): void { console.log(`Pagando Apuestas de BlackJack.`); }

    public mesclarCartas(): void { console.log(`Mesclando las Cartas.`); }
    public repartirCartas(): void { console.log(`Repartiendo Cartas.`); 
//        this.cartasEnJuego.push(this.cartas.pop()));
    }
    public juntarCartas(): void {console.log(`Juntando las Cartas.`);
//        this.cartasEnJuego.push(this.cartas.pop()));
    }
}

//-----------------------------------------------------------------------------
// const palo = { oro: "Oro", copa: "Copa", espada: "Espada", basto: "Basto" }
// class Carta {
//     private numero: number;
//     private palo: string; //new Palo.Oro();
//     public constructor(numero: number, palo: string) {
//         this.numero = numero;
//         this.palo = palo;
//     }
// }
// //-----------------------------------------------------------------------------
// class Palo {
//     private _Oro: number = 1;
//     public get Oro(): number {
//         return this._Oro;
//     }
//     public set Oro(value: number) {
//         this._Oro = value;
//     }
//     private Copa: number = 2;
//     private Espada: number = 2;
//     private basto: number = 4
// }