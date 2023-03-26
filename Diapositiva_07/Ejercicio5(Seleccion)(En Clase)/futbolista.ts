import { Persona } from "./persona";
//-----------------------------------------------------------------------------
export class Futbolista extends Persona {
    private titular: boolean;
    private lesionado: boolean;
    private desempeño: number; // 0-100%
    //-------------------------------------------------------------------------
    constructor(nombre: string, apellido: string, numeroDePasaporte: string
        , desempeño: number, lesionado: boolean = false, fechaDeNacimiento?: Date) {
        super(nombre, apellido, numeroDePasaporte, fechaDeNacimiento)
        this.titular = false;
        this.lesionado = lesionado;
        this.desempeño = desempeño;
    }
    //-------------------------------------------------------------------------
    public getDesempeño(): number { return this.desempeño }
    public setDesempeño(desempeño: number): void { this.desempeño = desempeño }
    public getEdad(): number {
        return 27; // TODO calcular la edad (investigar date-fns npm package)
        // return ((new Date()).getDate() - this.getFechaDeNacimiento()); 
    }
    //-------------------------------------------------------------------------
    public esTitular(): boolean { return this.titular }
    public titularizar(): void { this.titular = true }
    public quitarTitularidad(): void { this.titular = false }

    public estaLesionado(): boolean { return this.lesionado }
    // public seLesiono(): void { this.lesionado = true }
    // public seRecupero(): void { this.lesionado = false }
    //-------------------------------------------------------------------------
    public jugarEnPosicion(posicion: string): void { /*implementar*/ }
    public jugar(): void { /*implementar*/ }
    public calentar(): void { /*implementar*/ }
}