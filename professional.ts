 enum Genero{masculino="masculino", femenino="femenino", sindefinir="sin definir"};
class Professional{
    
    name: string;
    age: number;
    genre: Genero;
    weight: number;
    heigth: number;
    hairColor:string;
    eyeColor: string;
    race: string;
    isRetired: boolean;
    nationality:string;
    oscarsNumber: number;
    profession: string;
            constructor(name:string,age: number, genre: Genero, weight: number, height: number, hairColor: string, eyeColor: string, race: string, isRetired: boolean, nationality: string, oscarsNumber: number, profession: string){
                    this.name=name;
                    this.age= age;
                    this.genre= genre;
                    this.weight=weight;
                    this.heigth=height;
                    this.hairColor=hairColor;
                    this.eyeColor=eyeColor;
                    this.race=race;
                    this.isRetired= isRetired;
                    this.oscarsNumber= oscarsNumber;
                    this.profession= profession;
                }
       toString():string{
           return (`\n\tNommbre : ${this.name} \n\tEdad : ${this.age} \n\tGenero : ${this.genre} \n\tPeso : ${this.weight} \n\tAltura : ${this.heigth} \n\tColor de pelo : ${this.hairColor} \n\tColor de ojos : ${this.eyeColor} \n\tRace : ${this.race} \n\t¿Está retirado? : ${this.isRetired} \n\tNumero de Oscar : ${this.oscarsNumber} \n\tProfesion : ${this.profession}\n\n`)
       }         
        
}

export{Professional,Genero};

