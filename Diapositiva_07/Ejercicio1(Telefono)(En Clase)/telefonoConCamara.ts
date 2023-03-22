//=============================================================================
import { randomBytes } from "crypto";
import { Telefono } from "./telefono";
//-----------------------------------------------------------------------------
export class TelefonoConCamara extends Telefono {
    private ultimaFoto: string;
    //-------------------------------------------------------------------------
    constructor() {
        super();
        this.ultimaFoto = "";
    }
    //-------------------------------------------------------------------------
    public sacarFoto() {        
        if (this.estaPrendido){
            console.log(`sacar foto`);
            this.ultimaFoto = randomBytes(5).toString() ; 
        } 
    }
}