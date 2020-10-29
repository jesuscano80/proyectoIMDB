import {Professional} from "./professional"

class Movie {
    title:string;
    releaseYear:number;
    actors:Professional[];
    nacionality: string;
    director: Professional;
    writer: Professional;
    Language: string;
    Plataform: string;
    isMCU:boolean;
    mainCharacterName:Professional;
    producer: Professional;
    distributor: string;
    genre: string;
            constructor(title:string,releaseYear:number,nacionality:string,genre:string){
                this.title=title;
                this.releaseYear=releaseYear;
                this.nacionality=nacionality;
                this.genre=genre;
            }

            toString():string{
                return (`Datos pelicula: \t\n Titulo pelicula : ${this.title} \t\n Año de lanzamiento : ${this.releaseYear} \t\n Actores : ${this.actors} \t\n Nacionalidad : ${this.nacionality} \t\n Director : ${this.director} \t\n Escritor : ${this.writer} \t\n Idioma : ${this.Language} \t\n Plataforma : ${this.Plataform} \t\n ¿Pertenece al MCU? : ${this.isMCU} \t\n Personaje principal : ${this.mainCharacterName} \t\n Productor : ${this.producer} \t\n Distribuidora : ${this.distributor} \t\n Genero : ${this.genre} \n\n`);
            }
}

export{Movie};