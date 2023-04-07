import * as readlineSync from 'readline-sync';
import  {red, blue, green,yellow} from "colors";
export class Pantalla {
    private pantalla:string[];

    public constructor(pPantalla:string[]) {
        this.pantalla=pPantalla;
    }
    public getPantalla():string[]{
        return this.pantalla;
    }
    public setPantalla(pPantalla:string[]){
        this.pantalla=pPantalla;
    }

    public bienvenido(pTitulo:String):void{
        console.log(red(`BIENVENIDO A ${pTitulo}\n`.toUpperCase()));
        console.log(green(`Que comience el juego\n`.toUpperCase()));
        
    }
    
    public mostrarPantalla(pTitulo:String){
        console.log("\n");
        
        console.log(yellow(`                  ${pTitulo}\n`.toUpperCase()));
        console.log("\n");
        console.log(blue("======================================================="));
        console.log("\n");
        console.log(red("                  MUCHA SUERTE EN SU TIRADA      \n"));
        console.log(red("           TRULULULULULULU TRULULULULU TRULULULU\n"));

        this.pausaConsola();
        console.log("\n");
        switch (pTitulo){
            case "La fruta de la fortuna":
                for (let i:number=0; i<3; i++) {
                    console.log(blue(`Fila ${i+1}.....`));
                    console.log(blue("------ -----// " + green(this.pantalla[i]) + " // " + green(this.pantalla[i+3]) + " // " + green(this.pantalla[i+6]) + " // --------"));
                }
                break;
            case "Las cartas tienen magia":
                for (let i:number=0; i<3; i++) {
                    console.log(blue(`Fila ${i+1}.....`));
                    console.log(blue("------ -----// " + green(this.pantalla[i]) + " // " + green(this.pantalla[i+3]) + " // " + green(this.pantalla[i+6]) + " // " + green(this.pantalla[i+9]) + " // --------"));
                }
                break;
            case "A las cartas, Mayor o Menor":
                this.borrarConsola();
                for (let i:number =0; i<this.pantalla.length; i++){
                    console.log(this.pantalla[i]);
                }
                break;
            case "Dados, dados y mas dados":
                this.pantalla=[];
                for (let i:number=0;i<5;i++){
                    console.log(this.pantalla[i]);
                }
                break;
            default:
                console.log("algo fallo");
        }
        
        

        console.log(blue(`\nCALCULANDO PREMIOS.....\n`));
        
    }
    public borrarConsola(){
        console.clear();
    }
    public pausaConsola(){
        readlineSync.question("Presiona " + green("Enter") + " para continuar...");
    }
}


