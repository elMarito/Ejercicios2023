// Diapositiva 4 - Ejercicios - Fuera de Clase
// En un mismo proyecto NPM
// Ejercicio 2
// Implementar la clase Matriz. En vez de consultar los valores con los 
// corchetes, se debe hacer (desde afuera) a través de un método → get(x, y)
//=============================================================================
class Matriz {
    private valores: any;
    public constructor() {
        this.valores = new Array();
    }
    public set(...param: any[]) {
        this.valores = param;
    }
    public get(x: number, y: number): any { return this.valores[x][y]; }
}
//=============================================================================
let m: Matriz = new Matriz();
m.set(["algo", 2, "3"], [4, "5", true]);
console.log(m);
const x: number = 1
const y: number = 2

console.log(`el valor de la posicion (${x},${y}) es: ${m.get(x, y)}`);
