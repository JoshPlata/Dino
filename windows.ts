let velocidadJuego: number=5;
let puntos: number = 0;

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

function subirVelocidadJuego(): void{

    if(puntos==300) velocidadJuego=7;
    if(puntos==600) velocidadJuego=8;
    if(puntos==900) velocidadJuego=9;
    if(puntos==1200) velocidadJuego=10;
    if(puntos==1500) velocidadJuego=11;
    if(puntos==1800) velocidadJuego=12;
    if(puntos==2100) velocidadJuego=13;
    if(puntos==2400) velocidadJuego=14;
    if(puntos==2700) velocidadJuego=15;
    if(puntos==3000) velocidadJuego=16
    
}