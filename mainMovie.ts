import{Movie} from "./movie"
import{Professional,Genero} from "./professional"

let nuevoprofesional= new Professional("jose",28,Genero.masculino,80,180,"rubio","azules","amplia",true,"española",4,"director");
let nuevoprofesional1= new Professional ("juan",20,Genero.masculino,82,190,"moreno","verdes","corta",false,"inglesa",1,"actor");

let nuevapeli = new Movie ("Los Goonies",1986,"estadounidense","ficcion")


nuevapeli.director=nuevoprofesional;
nuevapeli.mainCharacterName=nuevoprofesional1;
console.log(nuevapeli.toString());

