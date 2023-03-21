// Diapositiva 5 - Ejercicios - Fuera de Clase
// Ejercicio 3
// Implementar la clase Televisor y Decodificador
//=============================================================================
import { Decodificador } from "./decodificador"
//=============================================================================
class Televisor {
    readonly DEFAULT_CHANNEL: number = 2
    //------------------------------------------------------------------------- 
    private estaPrendido: boolean;
    private volumenActual: number;
    private canalActual: number;
    private decodificador: Decodificador;
    public constructor(decodificador: Decodificador) {
        this.estaPrendido = false;
        this.volumenActual = 0;
//        this.decodificador.sintonizar(canal) // se podria hacer algo asi.....
        this.canalActual = 2;
        this.decodificador = decodificador;
    }

    public prenderApagar(): void { this.estaPrendido = !this.estaPrendido; }
    public subirVolumen(): void {
        if (!this.estaPrendido) return
        if (this.verVolumenActual() < 100) this.volumenActual++;
    }
    public bajarVolumen(): void {
        if (!this.estaPrendido) return
        if (this.verVolumenActual() > 0) this.volumenActual--;
    }
    public subirCanal(): void {
        if (!this.estaPrendido) return
        if (this.verCanalActual() < 999) this.canalActual++
        else this.canalActual = this.DEFAULT_CHANNEL;
    }
    public bajarCanal(): void {
        if (!this.estaPrendido) return
        if (this.verCanalActual() > this.DEFAULT_CHANNEL) this.canalActual--
        else this.canalActual = 999
        // this.volumenActual += (this.verCanalActual() > this.DEFAULT_CHANNEL) ? 1 : 997
    }
    public cambiarCanal(canal: number): void {
        if (!this.estaPrendido) return
        if (canal < 1000 && canal >= this.DEFAULT_CHANNEL) this.canalActual = canal;
//        this.decodificador.sintonizar(canal)
    }
    public verCanalActual(): number { return this.canalActual; }
    public verVolumenActual(): number { return this.volumenActual; }
}
//=============================================================================
let decodificador: Decodificador = new Decodificador("Sony");

let primerTelevisor: Televisor = new Televisor(decodificador);

//console.log(primerTelevisor);
//primerTelevisor.cambiarCanal(15); //TEST: si esta apagado no cambia el canal.

console.log(primerTelevisor);

primerTelevisor.prenderApagar();
primerTelevisor.subirVolumen();
primerTelevisor.subirVolumen()
primerTelevisor.subirCanal()
primerTelevisor.cambiarCanal(999);
//console.log(`el Volumen actual es: ${    primerTelevisor.verVolumenActual()}`    );
console.log(`el Canal actual es: ${    primerTelevisor.verCanalActual()}`    );
primerTelevisor.subirCanal()

console.log(primerTelevisor);