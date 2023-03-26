export class Mamifero {
    private nombre: string;
    private habitats: string[];
    private cuadrupedo: boolean;
    private volador: boolean;
    protected comidas: string[];
    //-------------------------------------------------------------------------
    constructor(nombre: string, habitat: string[], cuadrupedo: boolean, volador: boolean) {
        this.nombre = nombre;
        this.habitats = habitat;
        this.cuadrupedo = cuadrupedo;
        this.volador = volador;
        this.comidas = [];
    }
    //-------------------------------------------------------------------------
    public getNombre(): string { return this.nombre; }
    public setNombre(value: string): void { this.nombre = value; }
    // public getHabitat(): string[] { return this.habitats; }
    // public setHabitat(value: string[]): void { this.habitats = value; }
    // public getCuadrupedo(): boolean { return this.cuadrupedo; }
    // public setCuadrupedo(value: boolean): void { this.cuadrupedo = value; }
    // public getVolador(): boolean { return this.volador; }
    // public setVolador(value: boolean): void { this.volador = value; }
    //-------------------------------------------------------------------------
    public getComidas(): string { return this.comidas.toString(); }
    public desplazarse(): void {
        if (this.volador)
            console.log(`El/la ${this.getNombre()} Vuela.`)
        else if (this.habitats.includes("acuatico") && this.habitats.length === 1)
            console.log(`El/la ${this.getNombre()} Nada.`)
        else
            console.log(`El/la ${this.getNombre()} Camina.`)
    }
    public comer(): void {
        console.log(`El/la ${this.getNombre()} come ${this.comidas.toString()}`)
    }

    // Esto funciona pero no es un comportamiento comun de la clase.
    // public cazar(): void {
    //     console.log(`El/la ${this.getNombre()} no es cazador.`)
    // }
}