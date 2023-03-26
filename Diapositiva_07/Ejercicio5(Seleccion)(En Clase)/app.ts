// Diapositiva 7 - Ejercicios - En Clase
// Ejercicio 5
// Crear proyecto NPM
// Subir proyecto a GitHub
// Implementar una Selección de Fútbol, conformada por Futbolistas, Entrenador y Masajista. 
// Cada integrante posee nombre, apellido, numero de pasaporte y fecha de nacimiento.
// Aplicar herencia donde sea posible.
//=============================================================================
//import { Persona } from "./persona";
//import { Futbolista } from "./futbolista";
import { Entrenador } from "./entrenador";
import { Masajista } from "./masajista";
import { Seleccion } from "./seleccion";
//-----------------------------------------------------------------------------
const entrenador: Entrenador = new Entrenador("jose", "pequerman", "123");
const miSeleccion: Seleccion = new Seleccion(
    "argentina", entrenador, new Masajista("fulano", "detal", "8000000"))

entrenador.convocarFutbolista(miSeleccion, "jug01", "messi ", "40000001",100);
entrenador.convocarFutbolista(miSeleccion, "jug02", "sdfghh", "40000002",100);
entrenador.convocarFutbolista(miSeleccion, "jug03", "rrr yy", "40000003",90);
entrenador.convocarFutbolista(miSeleccion, "jug04", "asdfij", "40000004",100);
entrenador.convocarFutbolista(miSeleccion, "jug05", "cvbxsj", "40000005",80);
entrenador.convocarFutbolista(miSeleccion, "jug06", "yuuiju", "40000006",80);
entrenador.convocarFutbolista(miSeleccion, "jug07", "fghjio", "40000007",80, true);
entrenador.convocarFutbolista(miSeleccion, "jug08", "vbnghj", "40000008",80);
entrenador.convocarFutbolista(miSeleccion, "jug09", "dgffii", "40000009",80);
entrenador.convocarFutbolista(miSeleccion, "jug10", "gfqgoo", "40000010",80);
entrenador.convocarFutbolista(miSeleccion, "jug11", "cvoqbb", "40000011",70);
entrenador.convocarFutbolista(miSeleccion, "jug12", "fgfqff", "40000012",60);
entrenador.convocarFutbolista(miSeleccion, "jug13", "hqhjjj", "40000013",60);
entrenador.convocarFutbolista(miSeleccion, "jug14", "fqghjj", "40000014",50);
entrenador.convocarFutbolista(miSeleccion, "jug15", "cvdqef", "40000015",50);

entrenador.armarEquipo( miSeleccion )
entrenador.presentarListaDeJugadores(miSeleccion.getPlantel());

miSeleccion.jugarPartido();
entrenador.dirigir()

//entrenador.decidirCambios("fulano","mengano")

