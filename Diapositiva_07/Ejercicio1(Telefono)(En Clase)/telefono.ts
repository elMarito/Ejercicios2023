// Diapositiva 7 - Ejercicios - En Clase
// Ejercicio 1
// Implementar las clases y métodos que se muestran
// Agregar variables/métodos adicionales
// Implementar cada clase en un archivo diferente
// Ojo con la forma de hacer los import
// Subir las cosas a GitHub y avisar por Slack
//=============================================================================
export class Telefono {
    protected estaPrendido: boolean;
    private bateriaActual: number;
    constructor() {
        this.estaPrendido = false;
        this.bateriaActual = 100;
    }
    //-------------------------------------------------------------------------
    public mandarMensaje(mensaje: string) {
        if (this.estaPrendido) console.log(mensaje);
    }
    public hacerLlamada(nro: string) {
        if (this.estaPrendido) console.log(`llamando al numero: ${nro}`);
    }
    public prenderApagar() {
        this.estaPrendido = !this.estaPrendido;
    }
}