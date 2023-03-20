export class Goma {
    private tamaño: number;
    public constructor(tamaño: number) {
      this.tamaño = tamaño;
    }
    getTamaño() {
      console.log("Tamaño de goma:", this.tamaño);
    }
  };