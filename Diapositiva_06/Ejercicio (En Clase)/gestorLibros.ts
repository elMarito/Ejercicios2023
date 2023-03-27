import { Libro } from './libro';
import * as fs from 'fs';
//-----------------------------------------------------------------------------
export class GestorLibros {
  private libros: Libro[];
  constructor() {
    this.libros = [];
  }
  //-------------------------------------------------------------------------
  public getLibros(): Libro[] { return this.libros }
  //Manejar libros------------------------------------------------------------
  public insertar(libro: Libro): void {
    // Se podria chequear que no exista para agregarlo.....
    const indice: number = this.buscar(libro.getISBN());
    if (indice === -1) {
      this.libros.push(libro);
      console.log(`El Libro ISBN: ${libro.getISBN()} ha sido insertado.`);
    }
    else
      console.log(`ERROR! IMPOSIBLE INSERTAR. El Libro ISBN: ${this.libros[indice].getISBN()} YA EXISTE.`);
  }
  public eliminar(libroISBN: string): void {
    const indice: number = this.buscar(libroISBN);
    if (indice > -1) {
      console.log(`El Libro ISBN: ${this.libros[indice].getISBN()} ha sido eliminado.`);
      this.libros.splice(indice, 1);
    }
    else
      console.log(`ERROR! IMPOSIBLE ELIMINAR. El Libro ISBN: ${libroISBN} NO EXISTE.`);
  }
  public consultar(libroISBN: string): (Libro | undefined) {
    const indice: number = this.buscar(libroISBN);
    return (indice > -1 ? this.libros[indice] : undefined)
  }
  public modificar(libroISBN: string, libroNuevo: Libro): void {
    const indice: number = this.buscar(libroISBN);
    if (indice > -1) {
      this.libros[indice] = libroNuevo;
      console.log(`El Libro ISBN: ${this.libros[indice].getISBN()} ha sido modificado.`);
    }
    else
      console.log(`ERROR! IMPOSIBLE MODIFICAR. El Libro ISBN: ${libroISBN} NO EXISTE.`);
  }
  public buscar(libroISBN: string): number {
    libroISBN = libroISBN.toUpperCase();
    return this.libros.findIndex(libro => libro.getISBN() === libroISBN);
  }
  //---------------------------------------------------------------------------
  public insertarLibrosDesdeArchivo(archivo: string) {
    let texto: string = fs.readFileSync(archivo, 'utf8');
    let registros: string[][] = texto.split('\r\n').map(linea => linea.split('|'));
    registros.slice(1, registros.length).forEach(reg => {
      this.insertar(new Libro(reg[0], reg[1], reg[2], reg[3], reg[4]))
    })
  }
}
