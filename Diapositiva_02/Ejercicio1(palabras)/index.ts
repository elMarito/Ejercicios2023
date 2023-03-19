// Diapositiva 2 - Ejercicios - En Clase
// Ejercicio 1
// Definir funciones (con todos los tipos necesarios) para hacer lo siguiente:
// Cargar un listado de palabras (por esta vez, usar el arreglo como variable global)
// Insertar/eliminar/buscar/actualizar una palabra del listado
//=============================================================================
const words: string[] = ["palotes", "caballo", "doncella", "jalapeño"];

function addWord(word: string): string {        // insertar
    words.push(word);
    return `se agrego "${word}" al listado`;
}

function findWord(word: string): (string | undefined) {     // buscar
    word = word.toLocaleLowerCase();
    return words.find(w => w.toLocaleLowerCase() === word)
        ? "encontrada" : "no encontrada";
}

function removeWord(word: string): string[] {        // eliminar
    word = word.toLocaleLowerCase();
    return words.filter((w) => w.toLocaleLowerCase() !== word)
    //metodo alternativo
    //return words.splice( words.findIndex( (w) => w.toLocaleLowerCase() === word) )
    //return words.splice( words.indexOf(word), 1); <-si estuvieran todas en minuscula.
}

function updateWord(word: string, newWord: string): void {        // actualizar
    word = word.toLocaleLowerCase();
    const i: number = words.findIndex(w => w.toLocaleLowerCase() === word)
    if (i > -1) words[i] = newWord;
}
//=============================================================================
console.log(words);

addWord("camiseta");
console.log(words, ` despues de agregar "camiseta"`);


findWord("algo");
console.log(removeWord("jalapeño"));
updateWord("palotes", "otra cosa");
console.log(words);