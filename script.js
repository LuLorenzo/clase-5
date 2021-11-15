class Yerba {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
        this.stock = 10;
    }
    sumaIva() {
      this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
        this.stock = this.stock - 1;
    }
}

const yerba1 = new Yerba("rosamonte 500gr.", "154");
const yerba2 = new Yerba("amanda 500gr.", "173");
const yerba3 = new Yerba("chamigo 500gr.", "194");
const yerba4 = new Yerba("cruz de malta 500gr.", "212");
const yerba5 = new Yerba("taragui 500gr.", "247");
const yerba6 = new Yerba("mañanita 500gr.", "250");
const yerba7 = new Yerba("unión 500gr.", "254");
const yerba8 = new Yerba("cbsé 500gr.", "256");
const yerba9 = new Yerba("playadito 500gr.", "302");
const yerba10 = new Yerba("la merced 500gr.", "382");


yerba1.sumaIva();
yerba2.sumaIva();
yerba3.sumaIva();
yerba4.sumaIva();
yerba5.sumaIva();
yerba6.sumaIva();
yerba7.sumaIva();
yerba8.sumaIva();
yerba9.sumaIva();
yerba10.sumaIva();

yerba1.vender();
yerba1.vender();
yerba9.vender();
yerba9.vender();
yerba9.vender();
yerba9.vender();
yerba9.vender();
yerba6.vender();