
export class Animal {
    constructor(
      public name: string,
      public species: string,
      public age: number
    ) {}
  }
  
  export class Zoo {
    private animals: Animal[] = [];
  
    addAnimal(animal: Animal): void {
      this.animals.push(animal);
    }
  
    removeAnimal(name: string): void {
      this.animals = this.animals.filter(animal => animal.name !== name);
    }
  
    getAnimal(name: string): Animal | undefined {
      return this.animals.find(animal => animal.name === name);
    }
  
    getAllAnimals(): Animal[] {
      return this.animals;
    }
  
    getAnimalsBySpecies(species: string): Animal[] {
      return this.animals.filter(animal => animal.species === species);
    }
  
    getAverageAge(): number {
      if (this.animals.length === 0) return 0;
      const totalAge = this.animals.reduce((sum, animal) => sum + animal.age, 0);
      return totalAge / this.animals.length;
    }
  }