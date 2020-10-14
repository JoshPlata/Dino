//Variables y propiedades
var BoolSaltar = false;
var Canvas;
var velocidadJuego = 5;
var puntos = 0;
var ctx;
var CorrerJuego = true;
var Elemento = /** @class */ (function () {
    function Elemento() {
    }
    Elemento.prototype.horizontal = function (numero) {
        this.posX += numero;
    };
    Elemento.prototype.vertical = function (numero) {
        this.posY += numero;
    };
    Object.defineProperty(Elemento.prototype, "gid", {
        get: function () {
            return this.id;
        },
        set: function (val) {
            this.id = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elemento.prototype, "galtura", {
        get: function () {
            return this.altura;
        },
        set: function (val) {
            this.altura = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elemento.prototype, "gancho", {
        get: function () {
            return this.ancho;
        },
        set: function (val) {
            this.ancho = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elemento.prototype, "gposX", {
        get: function () {
            return this.posX;
        },
        set: function (val) {
            this.posX = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elemento.prototype, "gpoxY", {
        get: function () {
            return this.posY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elemento.prototype, "gnombre", {
        get: function () {
            return this.nombre;
        },
        set: function (val) {
            this.nombre = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elemento.prototype, "gimagen", {
        get: function () {
            return this.imagen;
        },
        set: function (val) {
            this.imagen = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elemento.prototype, "gposY", {
        set: function (val) {
            this.posY = val;
        },
        enumerable: false,
        configurable: true
    });
    return Elemento;
}());
var dinosaurio = new Elemento();
var Obstaculo = new Elemento();
var Obstaculo2 = new Elemento();
var Fondo = new Elemento();
/**
 *  Pintar el dinosaurio en el escenario, en una posicion establecida.
 *  Se modificara solamente y.
 */
function iniciarDino() {
    /**
     *  Crear el objeto que se pintara.
     */
    dinosaurio.gid = 1;
    dinosaurio.galtura = 30;
    dinosaurio.gancho = 38;
    dinosaurio.gposX = Canvas.width / 2 - 100;
    dinosaurio.gposY = Canvas.height / 2 + 30;
    dinosaurio.gnombre = "Dino";
    dinosaurio.gimagen = "";
}
/**
* @author Dan
* Funcion que inicia el Canvas
*/
function Inicio() {
    Canvas = document.getElementById("juego");
    ctx = Canvas.getContext("2d");
    iniciarDino();
    AgregarEventoTeclado();
    window.setInterval(function () { dinoLoop(); }, 1000 / 50);
}
var dinoLoop = function () {
    if (CorrerJuego) {
        pintarDino();
        SubirVelocidadJuego();
    }
    return;
};
/**
* @author Dan
* Funcion que escucha el teclado
*/
function AgregarEventoTeclado() {
    window.onkeydown = function (evt) {
        switch (evt.keyCode) {
            case 32:
                if (!BoolSaltar) {
                    //movSalto-=velocidadJuego;
                    BoolSaltar = true;
                }
                break;
        }
    };
    return;
}
/**
* @author Dan
* Funcion que sube la velocidad de juego dependiendo los puntos
*/
function SubirVelocidadJuego() {
    if (puntos == 300)
        velocidadJuego = 7;
    if (puntos == 600)
        velocidadJuego = 8;
    if (puntos == 900)
        velocidadJuego = 9;
    if (puntos == 1200)
        velocidadJuego = 10;
    if (puntos == 1500)
        velocidadJuego = 11;
    if (puntos == 1800)
        velocidadJuego = 12;
    if (puntos == 2100)
        velocidadJuego = 13;
    if (puntos == 2400)
        velocidadJuego = 14;
    if (puntos == 2700)
        velocidadJuego = 15;
    if (puntos == 3000)
        velocidadJuego = 16;
    return;
}
/**
 *  Pintar dino con base en las posiciones senaladas desde la clase.
 */
function pintarDino() {
    var d = document.getElementById("dino");
    ctx.drawImage(d, dinosaurio.gposX, dinosaurio.gposY, dinosaurio.gancho, dinosaurio.galtura);
}
Inicio();
