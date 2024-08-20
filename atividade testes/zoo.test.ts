import { Zoo, Animal } from '../atividade testes/zoo';

describe('Zoo', () => {
  let zoo: Zoo;

  beforeEach(() => {
    zoo = new Zoo();
  });

  test('should add an animal to the zoo', () => {
    const animal = new Animal('Leo', 'Lion', 4);
    zoo.addAnimal(animal);

    expect(zoo.getAllAnimals()).toContain(animal);
  });

  test('should remove an animal from the zoo by name', () => {
    const animal1 = new Animal('Leo', 'Lion', 4);
    const animal2 = new Animal('Bella', 'Elephant', 8);
    zoo.addAnimal(animal1);
    zoo.addAnimal(animal2);

    zoo.removeAnimal('Leo');

    expect(zoo.getAllAnimals()).not.toContain(animal1);
    expect(zoo.getAllAnimals()).toContain(animal2);
  });

  test('should return an animal by name', () => {
    const animal = new Animal('Leo', 'Lion', 4);
    zoo.addAnimal(animal);

    const foundAnimal = zoo.getAnimal('Leo');

    expect(foundAnimal).toBe(animal);
  });

  test('should return undefined when animal is not found by name', () => {
    const foundAnimal = zoo.getAnimal('Nonexistent');

    expect(foundAnimal).toBeUndefined();
  });

  test('should return all animals in the zoo', () => {
    const animal1 = new Animal('Leo', 'Lion', 4);
    const animal2 = new Animal('Bella', 'Elephant', 8);
    zoo.addAnimal(animal1);
    zoo.addAnimal(animal2);

    const allAnimals = zoo.getAllAnimals();

    expect(allAnimals).toEqual([animal1, animal2]);
  });

  test('should return animals by species', () => {
    const animal1 = new Animal('Leo', 'Lion', 4);
    const animal2 = new Animal('Bella', 'Elephant', 8);
    const animal3 = new Animal('Simba', 'Lion', 2);
    zoo.addAnimal(animal1);
    zoo.addAnimal(animal2);
    zoo.addAnimal(animal3);

    const lions = zoo.getAnimalsBySpecies('Lion');

    expect(lions).toEqual([animal1, animal3]);
  });

  test('should return average age of animals', () => {
    const animal1 = new Animal('Leo', 'Lion', 4);
    const animal2 = new Animal('Bella', 'Elephant', 8);
    zoo.addAnimal(animal1);
    zoo.addAnimal(animal2);

    const averageAge = zoo.getAverageAge();

    expect(averageAge).toBe(6);
  });

  test('should return 0 as average age when no animals are in the zoo', () => {
    const averageAge = zoo.getAverageAge();

    expect(averageAge).toBe(0);
  });
});
