import {Movie} from "./movie"
const fs=require("fs");
class IMDB {
    peliculas:Movie[];

            constructor(peliculas:Movie[]){
                this.peliculas=peliculas;
            }
    escribirEnFicheroJSON(nombrefichero:string){
        var creadoJSON=JSON.stringify(this.peliculas);
        fs.writeFileSync(nombrefichero, creadoJSON, (err) => {
            if (err) throw err;
            console.log('Fichero grabado!');
          });
        }
    obtenerInstanciaIMDB(nombrefichero:string){
        return this.peliculas=JSON.parse(fs.readFileSync(nombrefichero))
    
    }

}

export{IMDB};