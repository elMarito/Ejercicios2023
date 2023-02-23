class Electrodomestico {
 //caracteristicas: 
	Const BAJO_CONSUMO: numeric = 100
	public nombre: string = "";
	public precioBase: numeric = 0;
	public color: string = "";
	public consumoEnergetico: numeric = 0;
	public peso: numeric = 0;

//La funcionalidad de la clase debe ser:
//public get -Todos los metodos get y set --> ESTE PUNTO TODAVIA NO LO COMENTAMOS EN CLASE ASIQUE LO PUEDEN DEJAR PENDIENTE

public esDeBajoConsumo(): boolean {
	return ( this.consumoEnergetico < BAJO_CONSUMO)
}

public balance(): numeric {
	return (this.precioBase/this.peso)
}

public esAltaGama(): boolean {
	return (this.balance() > 3)
}
//public esAltaGama(): void{	console.log (this.balance() > 3)}
}
