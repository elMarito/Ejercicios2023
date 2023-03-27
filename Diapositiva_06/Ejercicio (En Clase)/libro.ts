



// work in progress


//=============================================================================
export class Libro {
    private ISBN: string;
    private titulo: string;
    private autor: string;
    private tematica: string;
    private editorial: string;
    //-------------------------------------------------------------------------
    constructor(ISBN: string, autor: string, titulo: string, tematica: string, editorial?: string) {
        this.ISBN = ISBN.toUpperCase().trim();
        this.autor = autor.toUpperCase().trim();
        this.titulo = titulo.toUpperCase().trim();
        this.tematica = tematica.toUpperCase().trim();
        this.editorial = (editorial === undefined) ? "" : editorial.toUpperCase().trim();
    }
    //-------------------------------------------------------------------------
    public getISBN(): string { return this.ISBN }

    public setAutor(autor: string): void { this.autor = autor.toUpperCase() }
    public getAutor(): string { return this.autor }

    public setTitulo(titulo: string): void { this.titulo = titulo.toUpperCase() }
    public getTitulo(): string { return this.titulo }
    
        public setTematica(tematica: string): void { this.tematica = tematica.toUpperCase() }
        public getTematica(): string { return this.tematica }

    public setEditorial(editorial: string): void { this.editorial = editorial.toUpperCase() }
    public getEditorial(): string { return this.editorial }
    //-------------------------------------------------------------------------
}