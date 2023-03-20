// Diapositiva 4 - Ejercicios - Fuera de Clase
// En un mismo proyecto NPM
// Ejercicio 3
// Crear la clase Electrodomestico con las siguientes caracteristicas: 
//  nombre, precio base, color, consumo energetico y peso.
// La funcionalidad de la clase debe ser:
// -Todos los metodos get y set
//  --> ESTE PUNTO TODAVIA NO LO COMENTAMOS EN CLASE ASIQUE LO PUEDEN DEJAR PENDIENTE
// -Comprobar si el electrodomestico es de bajo consumo (valor booleano)
//  --> Ayuda: comparen el consumoEnergetico
//  contra un valor cualquier (ejemplo 100). FUNCION CON RETORNO BOOLEANO.
// -Calcular el balance (costo dividido peso)
//  --> Ayuda: this.precioBase/this.peso en funcion con retorno Number
// -Indicar si es un producto de alta gama(balance mayor que 3).
//  --> Ayuda: calculen el balance y luego hacen  if balance > 3
//  --> funcion con retorno booleno/funcion void con console.log.
//=============================================================================
class Electrodomestico {
	readonly BAJO_CONSUMO: number = 100
	//-------------------------------------------------------------------------
	//caracteristicas: 
	private _nombre: string = "";
	private _precioBase: number = 0;
	private _color: string = "";
	private _consumoEnergetico: number = 0;
	private _peso: number = 0;
	//-------------------------------------------------------------------------
	//Geter y Seters
	public getNombre(): string { return this._nombre; }
	public setnombre(value: string) { this._nombre = value; }
	public getPrecioBase(): number { return this._precioBase; }
	public setPrecioBase(value: number) { this._precioBase = value; }
	public getColor(): string { return this._color; }
	public setColor(value: string) { this._color = value; }
	public getConsumoEnergetico(): number { return this._consumoEnergetico; }
	public setConsumoEnergetico(value: number) { this._consumoEnergetico = value; }
	public getPeso(): number { return this._peso; }
	public setPeso(value: number) { this._peso = value; }
	//-------------------------------------------------------------------------
	constructor(nuevoNombre: string
		, nuevoPrecio: number
		, nuevoColor: string
		, nuevoConsumoEnergetico: number
		, nuevoPeso: number = 0) {

		this._nombre = nuevoNombre;
		this._precioBase = nuevoPrecio;
		this._color = nuevoColor;
		this._consumoEnergetico = nuevoConsumoEnergetico;
		this._peso = nuevoPeso;	//parametro opcional.  
	}
	//-------------------------------------------------------------------------
	//La funcionalidad de la clase debe ser:
	//public get -Todos los metodos get y set --> ESTE PUNTO TODAVIA NO LO COMENTAMOS EN CLASE ASIQUE LO PUEDEN DEJAR PENDIENTE

	public esDeBajoConsumo(): boolean {
		return (this._consumoEnergetico < this.BAJO_CONSUMO)
	}

	public balance(): number {
		return (this._precioBase / this._peso)
	}

	public esAltaGama(): boolean {
		return (this.balance() > 3)
	}
}
//=============================================================================
// Ejercicio clase Jueves 23 de febrero de 2023
// A la clase Electrodomestico en la que venian trabajando, completarla con:
// -Constructor que reciba los parametros necesarios para incializar 
//  los atributos de la clase al momento de instanciarla
// -Todos los metodos get y set
// Crear diferentes instancias del electrodomestico, e interactuar con estas instancias
// (Ejemplo: consultarle el valor de un atributo utilizando get y mostrarlo por consola)

let microondas = new Electrodomestico("Mircroondas Samsung", 20000, "gris", 120, 20000);
//console.log(microondas);
let heladera = new Electrodomestico("Patich", 150000, "blanca", 20, 8000);
let tostadora = new Electrodomestico("Gamma", 2000, "blanca", 200);

console.log("El microondas " + (microondas.esDeBajoConsumo() ? "si" : "no") + " es de bajo consumo y su precio es " + microondas.getPrecioBase());
console.log("La heladera " + (heladera.esDeBajoConsumo() ? "si" : "no") + " es de bajo consumo y su precio es " + heladera.getPrecioBase());

console.log("El microondas " + (microondas.esAltaGama() ? "si" : "no") + " es de alta gama.");
console.log("La heladera " + (heladera.esAltaGama() ? "si" : "no") + " es de alta gama.");
console.log("La tostadora " + (tostadora.esAltaGama() ? "si" : "no") + " es de alta gama.");
