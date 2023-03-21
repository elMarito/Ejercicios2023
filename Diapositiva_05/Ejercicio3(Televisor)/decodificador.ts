// Diapositiva 5 - Ejercicios - Fuera de Clase
// Ejercicio 3
// Implementar la clase Televisor y Decodificador
//=============================================================================
export class Decodificador {
    private marca: string;
    private frecuencia: string
    private norma: string
    private demodulación: string;
    public constructor(marca: string) {
        this.marca = marca;
        this.frecuencia = "6 Mhz";
        this.norma = "ISDB-T";
        this.demodulación = "QPSK";
    }
    public sintonizar(canal: number) {
//        this.frecuencia = canal * 3.14;
    }
}