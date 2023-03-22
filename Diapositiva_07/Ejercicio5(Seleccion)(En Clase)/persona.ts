export class Persona {
    private nombre: string;
    private apellido: string;
    private numeroDePasaporte: string;
    private fechaDeNacimiento: Date;
    //-------------------------------------------------------------------------
    constructor(nombre: string, apellido: string, numeroDePasaporte: string, fechaDeNacimiento?: Date) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.numeroDePasaporte = numeroDePasaporte;
        this.fechaDeNacimiento = (fechaDeNacimiento === undefined) ? new Date() : fechaDeNacimiento;
    }
    //-------------------------------------------------------------------------
    public getNombre(): string { return this.nombre; }
    public setNombre(value: string): void { this.nombre = value; }
    public getApellido(): string { return this.apellido; }
    public setApellido(value: string): void { this.apellido = value; }
    public getNumeroDePasaporte(): string { return this.numeroDePasaporte; }
    public setNumeroDePasaporte(value: string): void { this.numeroDePasaporte = value; }
    public getFechaDeNacimiento(): Date { return this.fechaDeNacimiento; }
    public setFechaDeNacimiento(value: Date): void { this.fechaDeNacimiento = value; }
    //-------------------------------------------------------------------------
}