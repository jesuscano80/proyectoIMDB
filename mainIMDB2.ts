import {IMDB} from "./imdb"
import {Movie} from "./movie"
const fs=require("fs");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
function preguntardatos(){
    // var pelicula={ "title":"","releaseYear":0, "nationality":"","genre":"" };
    
  readline.question('Dime el titulo de la pelicula\n', function(titulo) {
    let title=titulo;
            readline.question('Dime el año de lanzamiento\n', function(ano) {
            let releaseYear=Number(ano);
                    readline.question('¿De que nacionalidad es la pelicula?\n', function(nac) {
                    let nationality=nac;
                        readline.question('¿De que genero es la pelicula?\n', function(genero) {
                        let genre=genero;
                        readline.close();
                        
                       let pelicula= new Movie(title,releaseYear,nationality,genre);
                       
                       let modeloobjeto: IMDB= JSON.parse(fs.readFileSync("imdbBBDD.json"));
                       modeloobjeto.peliculas.push(pelicula);
                       console.log(modeloobjeto);
                       let aJSON=JSON.stringify(modeloobjeto);
                       
                       fs.writeFileSync("imdbBBDD.json", aJSON, (err) => {
                        if (err) throw err;
                        console.log('Fichero grabado!');})
                    });  
                    });
            }); 
});
    

}

preguntardatos();



  