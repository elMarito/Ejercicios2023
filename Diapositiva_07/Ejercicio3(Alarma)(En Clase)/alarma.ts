// Diapositiva 7 - Ejercicios - En Clase
// Ejercicio 3
// Implementar la clase Alarma con los atributos que indican si: 
//  se rompio un vidrio, se abrio una puerta o ventana, 
//  se detecto un movimiento dentro del domicilio.
// Cuando se invoca al metodo comprobar() de la alamar, la misma chequea
//  si alguna de sus variables indica que debe hacer sonar la señal sonora.
// Crear una clase denominada AlarmaLuminosa que, ademas de activar la señal sonora,
//  encienda una luz cuando alguno de los indicadores esta activado.
//=============================================================================



// work in progress



export class Alarma {
    protected seRompioUnVidrio: boolean;
    protected seAbrioAlgo: boolean;
    protected seDetectoMovimiento: boolean;
    constructor() {
        //      this.estaPrendida = false;
        this.seRompioUnVidrio = false;
        this.seAbrioAlgo = true;
        this.seDetectoMovimiento = false;
    }
    //-------------------------------------------------------------------------
    /*public mandarMensaje(mensaje: string) {
        if (this.estaPrendida) console.log(mensaje);
    }*/    
    public comprobar() {
        if (this.seAbrioAlgo || this.seAbrioAlgo || this.seDetectoMovimiento) {
            console.log(`Alarma Activada!!!: señal sonora`);
        }
    }
    /*    public prenderApagar() {
            this.estaPrendida = !this.estaPrendida;
        }*/
}
