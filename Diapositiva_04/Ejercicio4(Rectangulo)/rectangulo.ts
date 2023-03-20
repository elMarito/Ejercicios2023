// Diapositiva 4 - Ejercicios - Fuera de Clase
// En un mismo proyecto NPM
// Ejercicio 4
// Crear la clase Rectangulo con las siguientes caracteristicas y su constructor: base, altura
// La funcionalidad de la clase debe ser:
// calcular el area
// Compararlo con otro rectangulo. Devolver 1 si es mayor, 0 son iguales y -1 si es menor.
// -Determinar si es un cuadrado(si base y altura son iguales).
// -Determinar si esta acostado o parado(si el alto es mas que el ancho).
//=============================================================================
import { table } from "console";
//-----------------------------------------------------------------------------
class Rectangulo {
    private base: number;
    private altura: number;
    public constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }
    //-------------------------------------------------------------------------
    public compararCon(otro: Rectangulo): number {
        /*if (this.getAarea() > otro.getAarea())
            return 1;
        elseif(this.getAarea() > otro.getAarea())*/
        let diferencia: number = (this.getAarea() - otro.getAarea())
        if (diferencia > 0) return 1;
        if (diferencia < 0) return -1;
        return 0;
    }
    public esCuadrado(): boolean {
        return (this.base === this.altura);
    }
    public getAarea(): number {
        return (this.base * this.altura);
    }
    public getEstado(): string {
        return (this.altura > this.base ? "parado" : "acostado");
    }
    public getInfo(): string {
        return (this.esCuadrado() ? "Es" : "No es") + " un Cuadrado, "
            + `su area es ${this.getAarea()} y está ${this.getEstado()}.`;
    }
}
//=============================================================================

const rectanguloAlto: Rectangulo = new Rectangulo(50, 100);
const rectanguloBajo: Rectangulo = new Rectangulo(500, 100);
const rectanguloCuadrado: Rectangulo = new Rectangulo(100, 100);
console.log({ rectanguloAlto }, rectanguloAlto.getInfo());
console.log({ rectanguloBajo }, rectanguloBajo.getInfo());
console.log({ rectanguloCuadrado }, rectanguloCuadrado.getInfo());


console.log("rectanguloAlto vs rectanguloBajo =", rectanguloAlto.compararCon(rectanguloBajo));
console.log("rectanguloAlto vs rectanguloCuadrado =", rectanguloAlto.compararCon(rectanguloCuadrado));

console.log("rectanguloBajo vs rectanguloAlto =", rectanguloBajo.compararCon(rectanguloAlto));
console.log("rectanguloBajo vs rectanguloCuadrado =", rectanguloBajo.compararCon(rectanguloCuadrado));

console.log("rectanguloCuadrado vs rectanguloAlto =", rectanguloCuadrado.compararCon(rectanguloAlto));
console.log("rectanguloCuadrado vs rectanguloBajo =", rectanguloCuadrado.compararCon(rectanguloBajo));

const otroAlto: Rectangulo = new Rectangulo(5, 1000);
console.log({ rectanguloAlto }, {otroAlto});

console.log("rectanguloAlto vs otroAlto =", rectanguloAlto.compararCon(otroAlto));
