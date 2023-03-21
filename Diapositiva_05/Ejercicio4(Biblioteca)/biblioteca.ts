
import { Libro } from "./libro";
import { Socio } from "./socio";
//-----------------------------------------------------------------------------
export class Biblioteca {
    private nombre: string;
    private direccion: string;
    private telefono: string;
    private localidad: string;
    private libros: Libro[];
    private socios: Socio[];
    //-------------------------------------------------------------------------
    public constructor(nombre: string, direccion: string, telefono: string
        , localidad: string, libros?: Libro[]) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.localidad = localidad;
        this.libros = (libros === undefined) ? new Array() : libros;
        this.socios = new Array();
    }
    //-------------------------------------------------------------------------
    public setNombre(nombre: string) { this.nombre = nombre }
    public getNombre(): string { return this.nombre }

    public setDireccion(direccion: string) { this.direccion = direccion }
    public getdireccion(): string { return this.direccion }

    public setTelefono(telefono: string) { this.telefono = telefono }
    public getTelefono(): string { return this.telefono }

    public setLocalidad(localidad: string) { this.localidad = localidad; }
    public getLocalidad(): string { return this.localidad }

    public setLibros(libros: Libro[]) { this.libros = libros; }
    public getLibros(): Libro[] { return this.libros }
    //-------------------------------------------------------------------------
    public getInfo(): void {
        console.log(`
        Datos de la biblioteca
        Nombre...: ${this.nombre}
        Direccion: ${this.direccion}
        Telefono.: ${this.telefono}
        Localidad: ${this.localidad}
        Cantidad de Socios: ${this.socios.length}
        Cantidad de Libros: ${this.libros.length}
        ----------------------------------------`)
    }
    //-------------------------------------------------------------------------
    public buscarIndiceLibro(autor: string, titulo: string, tematica: string): number {
        return this.libros.findIndex(libro => (libro.getAutor() === autor.toUpperCase()
            && libro.getTitulo() === titulo.toUpperCase()
            && libro.getTematica() === tematica.toUpperCase()));
    }
    public buscarLibro(autor: string, titulo: string, tematica: string): (Libro | undefined) {
        const indice: number = this.buscarIndiceLibro(autor, titulo, tematica);
        if (indice > -1) return this.libros[indice]
        else {
            console.log(`ERROR! No contamos con un libro con las caracteristicas ingresadas.`
                + ` "${titulo}", del autor: ${autor} (${tematica}).`);
            return undefined
        }
        //        return (indice > -1 ? this.libros[indice] : undefined)
    }
    // 
    //   public buscadorLibros(nombre: string): void {
    //        const search = libros.map(element => element);
    //        search.forEach(element => { if (element.titulo === nombre) { console.log(element) } });
    //    }
    public buscarIndiceSocio(dniSocio: string): number {
        //        dniSocio = dniSocio.toLocaleUpperCase();
        return this.socios.findIndex(socio => socio.getDni() === dniSocio);
    }
    public buscarSocio(dniSocio: string): (Socio | undefined) {
        const indice: number = this.buscarIndiceSocio(dniSocio);
        return (indice > -1 ? this.socios[indice] : undefined)
    }
    // 
    //public actualizar(dniSocio: string, autoNuevo: Auto): void {
    //     const indice: number = this.buscarIndiceSocio(dniSocio);
    //     if (indice > -1) this.socios[indice] = autoNuevo;
    // }
    //-------------------------------------------------------------------------
    public addSocio(socio: Socio): void {
        this.socios.push(socio);
        console.log(`La biblioteca tiene un nuevo socio! N° ${this.socios.length}`
            + ` - ${socio.getNombre()}, ${socio.getApellido()}. DNI N° ${socio.getDni()}`);
    }
    public addLibro(libro: Libro): void {
        this.libros.push(libro);
        console.log(`La biblioteca adquirio un nuevo libro! "${libro.getTitulo()}"`
            + `, del autor: ${libro.getAutor()} (${libro.getTematica()}).`);
        //        this.libros.push( {lib: libro, cantidad:0});// idea?
    }
    //-------------------------------------------------------------------------
    public entregarLibroASocio(libro: Libro, dniSocio: string): void {
        // si libro no es valido.
        if (libro === undefined) {
            console.log("ERROR! Imposible entregar. No disponemos de ese ejemplar.");
            return;
        }
        // si libro no esta disponible.
        if (!libro.estaDisponible()) {
            console.log("ERROR! Imposible entregar. No disponemos de ese ejemplar. (FUE PRESTADO)");
            return;
        }
        // Si no es socio.
        let indiceSocio: number = this.buscarIndiceSocio(dniSocio)
        if (indiceSocio < 0) {
            console.log("ERROR! Imposible entregar. No existe un Socio con ese DNI.");
            return;
        }
        // Si esta todo Ok.--------------------------------
        let indiceLibro = this.buscarIndiceLibro(libro.getAutor(), libro.getTitulo(), libro.getTematica())
        // agregar indiceLibro al los libros que tiene el socio.
        this.socios[indiceSocio].retirarLibro(indiceLibro)
        // cambiar el estado del libro a no disponible.
        this.libros[indiceLibro].entregar()

        console.log(`El socio ${this.socios[indiceSocio].getNombre()} a retirado`
            + ` el libro "${this.libros[indiceLibro].getTitulo()}".`);
        //            let socio: Socio = this.buscarSocio(dniSocio)
        //            socio.retirarLibro(indiceLibro)
        //            this.actualizarSocio(dniSocio, socio)
    }
    public recibirLibroDeSocio(libro: Libro, dniSocio: string) {
        // Si no es socio.
        let indiceSocio: number = this.buscarIndiceSocio(dniSocio)
        if (indiceSocio < 0) {
            console.log("ERROR! Imposible entregar. No existe un Socio con ese DNI.");
            return;
        }
        // Si libro no es nuestro.
        let indiceLibro = this.buscarIndiceLibro(libro.getAutor(), libro.getTitulo(), libro.getTematica())
        if (indiceLibro < 0) {
            console.log("ERROR! Imposible devolver. El libro no pertenece a la biblioteca.");
            return;
        }
        // Si esta todo Ok.--------------------------------
        // quitar indiceLibro al los libros que tiene el socio.
        this.socios[indiceSocio].devolverLibro(indiceLibro)
        // cambiar el estado del libro a no disponible.
        this.libros[indiceLibro].recibir()
        console.log(`El socio ${this.socios[indiceSocio].getNombre()} a devuelto`
            + ` el libro "${this.libros[indiceLibro].getTitulo()}".`);
    }
}
//=============================================================================
