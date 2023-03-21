// Los libros estaran identificados por titulo, autor y tematica.
//=============================================================================
export class Libro {
//    private ISBN: String; //Opcion ideal. pero  el enunciado
    // dice "Los libros estaran identificados por titulo, autor y tematica"
    private titulo: string;
    private autor: string;
    private tematica: string;
    private editorial: string;
    private disponible: boolean;
//    public dniSocio: string; // <-- funcionaria para reemplazar "disponible" 
//    pero los libros no deberian tener datos de los socios.
// quizas la biblioteca deberia tener dos listados de libros (disponibles y no dispo..)
    //-------------------------------------------------------------------------
    constructor(autor: string, titulo: string, tematica: string, editorial?: string) {
        this.autor = autor.toUpperCase();
        this.titulo = titulo.toUpperCase();
        this.tematica = tematica.toUpperCase();
        this.editorial = (editorial === undefined) ? "" : editorial.toUpperCase();
        this.disponible = true;
    }
    //-------------------------------------------------------------------------
    public setAutor(autor: string) :void{ this.autor = autor.toUpperCase() }
    public getAutor(): string { return this.autor }

    public setTitulo(titulo: string):void { this.titulo = titulo.toUpperCase() }
    public getTitulo(): string { return this.titulo }

    public setEditorial(editorial: string):void { this.editorial = editorial.toUpperCase() }
    public getEditorial(): string { return this.editorial }

    public setTematica(tematica: string):void { this.tematica = tematica.toUpperCase() }
    public getTematica(): string { return this.tematica }

//    public setDisponible(disponible: boolean) { this.disponible = disponible }
//    public getDisponible(): boolean { return this.disponible }
    //-------------------------------------------------------------------------
    public estaDisponible(): boolean {
        return this.disponible;
    }
    public entregar():void { this.disponible = false }
    public recibir():void { this.disponible = true }    
}