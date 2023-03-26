import { Futbolista } from "./futbolista";
//import { Masajista } from "./masajista";
import { Persona } from "./persona";
import { Seleccion } from "./seleccion";
//-----------------------------------------------------------------------------
export class Entrenador extends Persona {
    constructor(nombre: string, apellido: string, numeroDePasaporte: string, fechaDeNacimiento?: Date) {
        super(nombre, apellido, numeroDePasaporte, fechaDeNacimiento)
    }
    //-------------------------------------------------------------------------
    public convocarFutbolista(seleccion: Seleccion, nombre: string, apellido: string
        , numeroDePasaporte: string, desempeño: number, lesionado: boolean = false
        , fechaDeNacimiento?: Date): void {
        seleccion.incorporarFutbolista(new Futbolista(nombre, apellido
            , numeroDePasaporte, desempeño, lesionado, fechaDeNacimiento));
        //        return seleccion.getPlantel()[seleccion.getPlantel().length];
    }
    //-------------------------------------------------------------------------
    public armarEquipo(seleccion: Seleccion): void {
        const jugadores = seleccion.getPlantel();

        this.evaluarTitularidad(jugadores);

        jugadores.sort((j1, j2) => {
            if (j1.esTitular() > j2.esTitular() &&
                (j1.getDesempeño() > j2.getDesempeño() ||
                    j1.estaLesionado() < j2.estaLesionado()))
                return -1;
            else
                return 1;
        });
        // solucion alternativa conjuntos de titulares ? y suplentes ?
        //     let mySet = new Set();        //     mySet.add(jugador);
    }
    //-------------------------------------------------------------------------
    //    private elegirTitulares(): void { }
    private evaluarTitularidad(futbolista: Futbolista[]): void {
        futbolista.forEach(j => {
            //     seleccion.getMasajista().evaluarLesion(j)
            //     this.evaluarDesempeño(j);
            if (!j.estaLesionado() && j.getDesempeño() > 50) j.titularizar()
            else j.quitarTitularidad()
            // 
        });
    }
    private evaluarDesempeño(futbolista: Futbolista): number {
        // evaluar si esta lesionado, la edad, goles,  tarjetas, etc
        return 100 // generar nro de 0 a 100.
    }
    //-------------------------------------------------------------------------
    public dirigir(): void { console.log(`Dar indicaciones.`); }
    //-------------------------------------------------------------------------
    public decidirCambios(titular: Futbolista, suplente: Futbolista): void {
        //  cambiarles la titularidad ? o cambiarlos de alguna lista.
    }
    //-------------------------------------------------------------------------
    public presentarListaDeJugadores(jugadores: Futbolista[]): void {
        console.log(`============================================`);
        console.log(`        TITULARES`);
        jugadores.slice(0, 11).forEach((element, i) => {
            console.log(i + 1, "...:", element.getNombre(), element.getApellido()
                , element.getDesempeño(), "%")
            // , String(element.esTitular())
            // , String(element.estaLesionado())
        });
        console.log(`----------------------------------------`);
        console.log(`        SUPLENTES`);
        jugadores.slice(11, jugadores.length)
            .forEach((element, i) => {
                console.log(i + 12, "...:", element.getNombre(), element.getApellido()
                    , element.getDesempeño(), "%"
                    , element.estaLesionado() ? "(Lesionado)" : "")
                // , String(element.esTitular())
            });
        console.log(`============================================`);
    }
    //-------------------------------------------------------------------------
    public calentar(jugador: Futbolista): void { jugador.calentar() }
}