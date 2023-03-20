//composición de clases
//las clases Motor y Goma son importadas de sus respectivos archivos.
//=============================================================================
import { Motor } from "./motor";
import { Goma } from "./goma";
//-----------------------------------------------------------------------------
export class Auto {
    private patente: string;  //propiedad agregada para utilizar en el Ejercicio 2 Fuera de Clase.
    private marca: string;
    private modelo: string;
    private motor: Motor;
    private gomas: Goma[];
    //-------------------------------------------------------------------------
    public constructor(marca: string, modelo: string, motor: Motor, gomas: Goma[]) {
      this.marca = marca;
      this.modelo = modelo;
      this.motor = motor;
      this.gomas = gomas;
      this.patente = ""; //propiedad agregada para utilizar en el Ejercicio 2 Fuera de Clase.
    }
    //-------------------------------------------------------------------------
    //propiedad agregada para utilizar en el Ejercicio 2 Fuera de Clase.
    public getPatente(): string { return this.patente; }
    public setPatente(value: string): void { this.patente = value.toLocaleUpperCase(); }
    //-------------------------------------------------------------------------
    public getAuto(): void {
      console.log(`
      -----------------------
        DATOS DEL VEHÍCULO
      -----------------------
      Patente   : ${this.patente} 
      Marca     : ${this.marca} 
      Modelo    : ${this.modelo}
      Motor     : ${this.motor}
      Cubiertas : ${this.gomas}
      `);  
    }
  }
  //=============================================================================
  const miMotor = new Motor("Grandote");
  const misGomas: Goma[] = [new Goma(20), new Goma(20), new Goma(20), new Goma(20)];
  
  const miAuto = new Auto("Triumph", "Banana", miMotor, misGomas);
  
  miAuto.getAuto();