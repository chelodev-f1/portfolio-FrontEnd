export class Proyecto {
    id?: number;
    nombreP: string;
    descripcionP: string;
    fechaP: string;
    imgP: string;

    constructor(nombreP: string, descripcionP: string, fechaP: string, imgP: string) {
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.fechaP = fechaP;
        this.imgP = imgP;
    }
}
