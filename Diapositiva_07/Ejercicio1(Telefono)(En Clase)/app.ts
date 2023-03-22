//-----------------------------------------------------------------------------
import { TelefonoConCamara } from "./telefonoConCamara";
import { TelefonoConRadio } from "./telefonoConRadio";
import { Telefono } from "./telefono";
//-----------------------------------------------------------------------------
const miTelefono = new TelefonoConCamara();
miTelefono.hacerLlamada("911");
miTelefono.mandarMensaje("hola");
miTelefono.sacarFoto();

miTelefono.prenderApagar();
miTelefono.hacerLlamada("911");
miTelefono.mandarMensaje("hola");
miTelefono.sacarFoto();
console.table(miTelefono);

const otroTelefono = new TelefonoConRadio();
otroTelefono.setFrecuenciaActual(1333);
otroTelefono.verFrecuenciaActual();
otroTelefono.prenderApagar();

otroTelefono.setFrecuenciaActual(1333);
otroTelefono.verFrecuenciaActual();
console.table(otroTelefono);


const telefonoBasico = new Telefono();
telefonoBasico.prenderApagar();
telefonoBasico.mandarMensaje("chau");
console.table(telefonoBasico);
