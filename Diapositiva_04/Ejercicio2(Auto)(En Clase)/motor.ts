export class Motor {
    private tipo: string;
    public constructor(tipo: string) {
      this.tipo = tipo;
    }
    getMotor() {
      console.log("Tipo de Motor:", this.tipo);
    }
  };