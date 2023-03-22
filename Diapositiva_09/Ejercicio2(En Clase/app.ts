// Diapositiva 9 - Ejercicios - En Clase
// Ejercicio 2
// Implementar las siguientes clases con las variables y métodos que crea necesarios:
// AutoCiudad
// AutoDeportivo
// Camioneta
// Abstraer elementos en común entre dichas clases → pasarlos a una clase
//  abstracta, y que las tres clases extiendan de ella
//=============================================================================
import { AutoCiudad } from "./autoDeCiudad";
import { AutoDeportivo } from "./autoDeportivo";
import { Camioneta } from "./camioneta";
//-----------------------------------------------------------------------------
const Vehiculo_1: AutoCiudad = new AutoCiudad("ci-040-xz", 1000000, "180/55R17 70 P");
const Vehiculo_2: AutoDeportivo = new AutoDeportivo("de-908-ti", 5000000, 210, "205/45R17 80 Y");
const Vehiculo_3: Camioneta = new Camioneta("ca-103-ta", 4000000, 1000, "225/55R17 94 Q");

// console.table(Vehiculo_1);
// console.table(Vehiculo_2);
// console.table(Vehiculo_3);

Vehiculo_1.getInfo();
Vehiculo_2.getInfo();
Vehiculo_3.getInfo();