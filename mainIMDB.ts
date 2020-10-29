import {IMDB} from "./imdb"
import {Movie} from "./movie"
import {Professional} from "./professional"
const fs=require('fs');

let nuevapeli = new Movie ("Los Goonies",1986,"estadounidense","ficción");
let nuevapeli2= new Movie ("Rambo",1984,"estodounidense","acción");
let nuevapeli3= new Movie ("Robocop",1988,"estadounidense","ficción");

let imdb= new IMDB ([nuevapeli,nuevapeli2,nuevapeli3]);

var creadoJSON=JSON.stringify(imdb);


fs.writeFileSync('imdbBBDD.json', creadoJSON, (err) => {
  if (err) throw err;
  console.log('Fichero grabado!');
});


let nuevoimdb=JSON.parse(fs.readFileSync("imdbBBDD.json"));

  
imdb.escribirEnFicheroJSON("pruebaJSON.json");
console.log(imdb.obtenerInstanciaIMDB("pruebaJSON.json"));

console.log(nuevoimdb);





