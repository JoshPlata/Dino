//Variables y propiedades
let BoolSaltar: boolean = false;
let Canvas;
let velocidadJuego:number=5;
let puntos:number=0;
let ctx;
let CorrerJuego=true;
let PisoY;

interface Sprite {
    id: number;
    altura: number;
    ancho: number;
    posX: number;
    posY: number;
    nombre: string;
    imagen: string;
}

interface Mov {
    horizontal(numero: number): void;
    vertical(numero: number): void;
}

class Elemento implements Sprite, Mov {
    id: number;
    altura: number;
    ancho: number;
    posX: number;
    posY: number;
    nombre: string;
    imagen: string;

    horizontal(numero: number): void {
        this.posX += numero;
    }
    vertical(numero: number): void {
        this.posY += numero;
    }

    get gid(): number {
        return this.id;
    }
    get galtura(): number {
        return this.altura;
    }
    get gancho(): number {
        return this.ancho;
    }
    get gposX(): number {
        return this.posX;
    }
    get gpoxY(): number {
        return this.posY;
    }
    get gnombre(): string {
        return this.nombre;
    }
    get gimagen(): string {
        return this.imagen;
    }


    set gid(val: number) {
        this.id = val;
    }
    set galtura(val: number) {
        this.altura = val;
    }
    set gancho(val: number) {
        this.ancho = val;
    }
    set gposX(val: number) {
        this.posX = val;
    }
    set gposY(val: number) {
        this.posY = val;
    }
    set gnombre(val: string) {
        this.nombre = val;
    }
    set gimagen(val: string) {
        this.imagen = val;
    }
}

let dinosaurio = new Elemento();
//let Obstaculo= new Elemento();
//let Obstaculo2= new Elemento();
let Fondo = new Elemento();

let obstaculos: Elemento[] = [];
let CrearSigArbol = true;
let ArbolesSaltados = 0;

/**
 *  Crea los obstaculos y los metemos en un arreglo
 */
function CrearObstaculo() {
    if (CrearSigArbol) {
        let obstaculo1 = new Elemento();
        let aleatorio: number = Math.random() * ((canvas.width + 200) - canvas.width) + canvas.width;
        //let aleatorio: number = 100;
        obstaculo1.gposX = aleatorio;
        obstaculo1.gposY = PisoY - 35,
        obstaculo1.ancho = 50;
        obstaculo1.altura = 70;
        obstaculos.push(obstaculo1);
        CrearSigArbol = false;
    }

    /*
    for (var index in obstaculos) {
        console.log(obstaculos[index]);
    }*/

}

/**
 * Dibujamos el obstaculo
 */
function DibujarObstaculos() {
    let imgobstaculo = document.getElementById("obstaculo");
    let ultPos;
    for (let i in obstaculos) {
        if (obstaculos[i].posX >= (-obstaculos[i].ancho)) {
            obstaculos[i].posX -= velocidadJuego;
            ctx.drawImage(imgobstaculo, obstaculos[i].posX, obstaculos[i].posY, obstaculos[i].ancho, obstaculos[i].altura);
            if ((obstaculos[i].posX <= dinosaurio.posX) && (obstaculos[i].posX > (dinosaurio.posX - velocidadJuego))) ArbolesSaltados++;
        }
        ultPos = i;
    }
    if (obstaculos[ultPos].posX < (canvas.width - 180)) CrearSigArbol = true;
}

/**
 * La funcion modifica la puntuacion basada en los obstaculos saltados
 */
function Puntuacion() {
    puntos = ArbolesSaltados * 20;
}

/**
 *  Pintar el dinosaurio en el escenario, en una posicion establecida.
 *  Se modificara solamente y.
 */

function iniciarDino(){
    /**
     *  Crear el objeto que se pintara.
     */          
    dinosaurio.gid=1;
    dinosaurio.galtura=30;
    dinosaurio.gancho=38;
    dinosaurio.gposX=Canvas.width/2 -100;
    dinosaurio.gposY=Canvas.height/2+30;
    dinosaurio.gnombre="Dino";
    dinosaurio.gimagen="";        

}

/**
* @author Dan
* Funcion que inicia el Canvas
*/

function Inicio(): void {

function Inicio(){
	Canvas = document.getElementById("juego");
    ctx = Canvas.getContext("2d");
    iniciarDino();		
	AgregarEventoTeclado();
	window.setInterval(function(){dinoLoop()},1000/50);
}

let dinoLoop = function():void{    
    if(CorrerJuego){        
        pintarDino();        
        SubirVelocidadJuego();                      
    }
    return;  
}


/**
* @author Dan
* Funcion que escucha el teclado
*/
function AgregarEventoTeclado(): void {
    window.onkeydown = function (evt) {
        switch (evt.keyCode) {
            case 32:
                if (!BoolSaltar) {
                    //movSalto-=velocidadJuego;
                    BoolSaltar = true;
                }
                break;

        }
    }
    return;
}

/**
* @author Dan
* Funcion que sube la velocidad de juego dependiendo los puntos
*/
function SubirVelocidadJuego(): void {
    if (puntos == 300) velocidadJuego = 7;
    if (puntos == 600) velocidadJuego = 8;
    if (puntos == 900) velocidadJuego = 9;
    if (puntos == 1200) velocidadJuego = 10;
    if (puntos == 1500) velocidadJuego = 11;
    if (puntos == 1800) velocidadJuego = 12;
    if (puntos == 2100) velocidadJuego = 13;
    if (puntos == 2400) velocidadJuego = 14;
    if (puntos == 2700) velocidadJuego = 15;
    if (puntos == 3000) velocidadJuego = 16;

    return;
}

/**
 *  Pintar dino con base en las posiciones senaladas desde la clase.
 */
function pintarDino(){
    var d = document.getElementById("dino");
    ctx.drawImage(d, dinosaurio.gposX, dinosaurio.gposY, dinosaurio.gancho, dinosaurio.galtura);
}

Inicio();
