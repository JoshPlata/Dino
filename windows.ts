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

