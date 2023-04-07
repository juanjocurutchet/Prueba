"use strict";
exports.__esModule = true;
exports.Jugador = void 0;
//import { resolve } from "path";
var menu_1 = require("./menu");
var readlineSync = require("readline-sync");
var colors_1 = require("colors");
//import { rejects } from "assert";
var Jugador = /** @class */ (function () {
    function Jugador(pNombre, pDinero) {
        this.nombre = pNombre;
        this.dinero = pDinero;
        this.apuesta = 0;
    }
    Jugador.prototype.getNombre = function () {
        return this.nombre;
    };
    Jugador.prototype.getDinero = function () {
        return this.dinero;
    };
    Jugador.prototype.getApuesta = function () {
        return this.apuesta;
    };
    Jugador.prototype.setDinero = function (pDinero) {
        this.dinero = pDinero;
    };
    Jugador.prototype.menuPantalla = function () {
        console.clear();
        console.log((0, colors_1.blue)("====================================="));
        console.log((0, colors_1.red)("||                                 ||"));
        console.log((0, colors_1.red)("||   BIENBENIDO A NUESTRO CASINO   ||"));
        console.log((0, colors_1.red)("||                                 ||"));
        console.log((0, colors_1.red)("||   ESTOS  SON NUESTROS JUEGOS    ||"));
        console.log((0, colors_1.red)("||                                 ||"));
        console.log((0, colors_1.blue)("====================================="));
        console.log((0, colors_1.green)("||                                 ||"));
        console.log((0, colors_1.green)("||   1 - Tragamonedas de frutas    ||"));
        console.log((0, colors_1.green)("||   2 - Tragamonedas de cartas    ||"));
        console.log((0, colors_1.green)("||   3 - Juego de mayor o menor    ||"));
        console.log((0, colors_1.green)("||   4 - Juego de cinco dados      ||"));
        console.log((0, colors_1.green)("||                                 ||"));
        console.log((0, colors_1.blue)("====================================="));
        console.log((0, colors_1.green)("||   0 - Salir                     ||"));
        console.log((0, colors_1.blue)("=====================================\n"));
    };
    Jugador.prototype.apostar = function () {
        var apuestaLocal;
        do {
            apuestaLocal = readlineSync.questionInt("Ingrese su apuesta: ".toUpperCase());
            if (apuestaLocal > 0) {
                this.dinero = this.dinero - apuestaLocal;
                this.apuesta = apuestaLocal;
            }
            else {
                console.log("No se puede apostar en negativo".toUpperCase());
            }
        } while (apuestaLocal <= 0);
    };
    Jugador.prototype.jugar = function () {
        var valor;
        do {
            this.menuPantalla();
            valor = readlineSync.questionInt("Ingrese una opcion del menu: ".toUpperCase());
            if ((valor > 0) && (valor < 5)) {
                var menu = new menu_1.Menu();
                menu.fabrica(valor, this);
            }
            else {
                if ((valor < 0) || (valor >= 5)) {
                    console.log("Debe ingrsear opciones del menu".toUpperCase());
                    console.log("\n");
                    readlineSync.question("Presiona " + (0, colors_1.green)("Enter") + " para continuar...");
                }
            }
        } while (valor != 0);
    };
    return Jugador;
}());
exports.Jugador = Jugador;
