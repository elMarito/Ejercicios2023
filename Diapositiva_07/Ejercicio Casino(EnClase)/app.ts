// les dejo la tarea...LA TIENEN QUE ENTREGAR DE MANERA INDIVIDUAL
// 
// Ejercicio de tarea OBLIGATORIO.
// -Hacer una clase JuegoDeCasino y de esa clase crear dos clases Hijas (Herencia).
// -Luego aplicar composicion entre una clase Casino y las dos clases hijas de Juego.
// -Crear los UML tal como los vieron en FIP y como esta explicado en el material de estudio.
// -Entregar la tarea a su tutor asignado antes del dia Jueves 16 de Marzo
//=============================================================================
import { Casino } from "./casino";
import { Ruleta } from "./ruleta";
import { BlackJack } from "./blackJack";
//-----------------------------------------------------------------------------
// const blackJack = new Blackjack (10 , 5)
// const ruleta = new Ruleta(20,1)

const casino = new Casino("Real", "algun lugar", "una localidad"
    , [new Ruleta(1, 100, 10)
        , new Ruleta(2, 1000, 5)])

// casino.agregarJuego(new Ruleta(1,100,10))
// casino.agregarJuego(new Ruleta(2,1000,5))
casino.agregarJuego(new BlackJack(1, 100, 10))

console.log(casino)