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
const Vehiculo_1: AutoCiudad = new AutoCiudad("ci-040-xz", "fiat", "2005", "chico");
const Vehiculo_2: AutoDeportivo = new AutoDeportivo("de-908-ti", "chevrolet", "1970", "grande", 210);
const Vehiculo_3: Camioneta = new Camioneta("ca-103-ta", "ford", "2020", "mediano", 2, 1000);

// console.table(Vehiculo_1);
// console.table(Vehiculo_2);
// console.table(Vehiculo_3);

Vehiculo_1.acelerar(10);
Vehiculo_2.acelerar(10);
Vehiculo_3.acelerar(10);

Vehiculo_1.getInfo();
Vehiculo_2.getInfo();
Vehiculo_3.getInfo();

Vehiculo_1.desacelerar(Vehiculo_1.getVelocidad());
Vehiculo_2.desacelerar();
Vehiculo_3.desacelerar(5);

Vehiculo_1.getInfo();
Vehiculo_2.getInfo();
Vehiculo_3.getInfo();