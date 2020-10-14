interface Sprite{
    id: number;
    altura: number;
    ancho: number;
    posX: number;
    posY: number;
    nombre: string;
    imagen: string;    
}

interface Mov{
    horizontal(numero: number): void;
    vertical(numero: number): void;
}

class Elemento implements Sprite,Mov { 
    id: number;
    altura: number;
    ancho: number;
    posX: number;
    posY: number;
    nombre: string;
    imagen: string;

    horizontal(numero: number): void {
        this.posX+=numero;
    }
    vertical(numero: number): void {
        this.posY+=numero;
    }
    
    get gid(): number{
        return this.id;
    }
    get galtura(): number{
        return this.altura;
    }
    get gancho(): number{
        return this.ancho;
    }
    get gposX(): number{
        return this.posX;
    }
    get gpoxY(): number{
        return this.posY;
    }
    get gnombre(): string{
        return this.nombre;
    }
    get gimagen(): string{
        return this.imagen;
    }


    set gid(val: number){
         this.id=val;
    }
    set galtura(val: number){
        this.altura=val;
    }
    set gancho(val: number){
        this.ancho=val;
    }
    set gposX(val: number){
        this.posX=val;
    }
    set gposY(val: number){
        this.posY=val;
    }
    set gnombre(val: string){
        this.nombre=val;
    }
    set gimagen(val: string){
        this.imagen=val;
    }
    
}
let camvas;
let ctx;
let puntos;
function dibujarFondo():void{
    camvas.width=camvas.width;
    let espacioCielo=camvas.height/2+50;
    //cielo
    ctx.fillSyle="FF000";
    ctx.fillrECT(0,0,camvas.width,espacioCielo);
    //MoverNudes();
    
    //puntuacion
    ctx.fillSyle="#FF000";
    ctx.font="bold 22xp sans-serif";
    ctx.fillText(puntos,camvas.width,camvas.width-100,50);
    //tierra
    ctx.fillSyle="B45F04";
    ctx.fillRect(0,espacioCielo,camvas.width,camvas.height- espacioCielo);
    //linea el piso 
    ctx.moveTo(0,espacioCielo);
    ctx.lineTo(camvas.width,espacioCielo);
    ctx.strokeStyle="black";
    ctx.stroke();
}

