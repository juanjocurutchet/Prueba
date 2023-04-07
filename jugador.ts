//import { resolve } from "path";
import { Menu } from "./menu";
import * as readlineSync from 'readline-sync';
import  {red, blue, green,yellow} from "colors";
//import { rejects } from "assert";


export class Jugador {
    private nombre:String;
    private dinero:number;
    private apuesta:number;
    

    public constructor(pNombre:String, pDinero:number){
        this.nombre=pNombre;
        this.dinero=pDinero;
        this.apuesta=0;
    }

    public getNombre():String{
        return this.nombre;
    }

    public getDinero():number{
        return this.dinero;
    }

    public getApuesta():number{
        return this.apuesta;
    }

    public setDinero(pDinero:number):void{
        this.dinero=pDinero;
    }

 
    private menuPantalla():void{
        console.clear();
        console.log(blue ("====================================="));
        console.log( red (`||                                 ||`));
        console.log( red (`||   BIENBENIDO A NUESTRO CASINO   ||`));
        console.log( red (`||                                 ||`));
        console.log( red (`||   ESTOS  SON NUESTROS JUEGOS    ||`));
        console.log( red (`||                                 ||`));
        console.log(blue ("====================================="));
        console.log(green("||                                 ||"));
        console.log(green("||   1 - Tragamonedas de frutas    ||"));
        console.log(green("||   2 - Tragamonedas de cartas    ||"));
        console.log(green("||   3 - Juego de mayor o menor    ||"));
        console.log(green("||   4 - Juego de cinco dados      ||"));
        console.log(green("||                                 ||"));
        console.log(blue ("====================================="));
        console.log(green("||   0 - Salir                     ||"));
        console.log(blue ("=====================================\n"));

    }

    public apostar():void {
        let apuestaLocal:number;
        do {
    
            apuestaLocal = readlineSync.questionInt("Ingrese su apuesta: ".toUpperCase());
            if (apuestaLocal>0){
                this.dinero=this.dinero-apuestaLocal;
                this.apuesta=apuestaLocal;
            }   else { console.log("No se puede apostar en negativo".toUpperCase());
            }
            
        
        } while (apuestaLocal<=0);
    }

    public jugar():void{
        let valor:number;
        do {
            this.menuPantalla();
            valor = readlineSync.questionInt("Ingrese una opcion del menu: ".toUpperCase());
            if ((valor>0)&&(valor<5)){
                let menu = new Menu();
                menu.fabrica(valor,this);
            } else {
                if ((valor<0)||(valor>=5)) {
                    console.log("Debe ingrsear opciones del menu".toUpperCase());
                    console.log("\n");
                    readlineSync.question("Presiona " + green("Enter") + " para continuar...");
                }
            }
            
        } while(valor!=0);
    }

}