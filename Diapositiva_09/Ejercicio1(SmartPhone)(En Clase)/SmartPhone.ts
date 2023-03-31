// Diapositiva 9 - Ejercicios - En Clase
// Ejercicio 1
//=============================================================================
interface iTelefono {
    prender(): void;
    apagar(): void;
    llamar(numero: string): void;
}
//-----------------------------------------------------------------------------
class SmartPhone implements iTelefono {
    private estaPrendido: boolean;
    constructor() {
        this.estaPrendido = false;
    }
    public prender(): void {
        this.estaPrendido = true;
    }
    public apagar(): void {
        this.estaPrendido = false;
    }
    public llamar(numero: string): void {
        console.log(`Llamando al N° ${numero}...`);
    }
    public sacarFoto(): void {
        console.log("Smile! Click");
    }
}