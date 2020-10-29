
  export  class Professional {
  public name: string;
  public age: number;
  public genre: string;
  public weight: number;
  public height: number;
  public hairColor: string;
  public eyeColor: string;
  public race: string;
  public isRetired: boolean;
  public nationality: string;
  public oscasrsNumber: number;
  public profession: string;


      constructor(name: string, age: number, genre: string, weight: number, height: number, hairColor: string, eyeColor: string, race: string, isRetired: boolean, nationality: string, oscarsNumber: number, profession: string) {
          this.name = name;
          this.age = age;
          this.genre = genre;
          this.weight = weight;
          this.height = height;
          this.hairColor = hairColor;
          this.eyeColor = eyeColor;
          this.race = race;
          this.isRetired = isRetired;
          this.nationality = nationality;
          this.oscasrsNumber = oscarsNumber;
          this.profession = profession;

  }


   showAttributes() {
    console.log(`\n Name: ${this.name} \n Age: {this.age} \n Genre: ${this.genre} \n Weight: ${this.weight} \n Height: ${this.height} \n Hair Color: ${this.hairColor} \n Eye Color: ${this.eyeColor} \n Race: ${this.race} \n Is Retired? ${this.isRetired} \n Nationality: ${this.nationality} \n Oscars Number: ${this.oscasrsNumber} \n Profession: ${this.profession}\n`);
  }
}

///let actor1 = new Professional("Maria", 26, "Drama", 65, 1.70, "Castaño", "Marrón", "black", false, "Española", 6, "escritora");
///let actor2 = new Professional("Juan", 26, "Drama", 65, 1.70, "Castaño", "Marrón", "black", false, "Española", 6, "escritora");



///actor1.showAttributes()
///actor2.showAttributes()