import { Zoo, Animal } from '../atividade testes/zoo';

describe('Zoo', () => {
  let zoo: Zoo;

  beforeEach(() => {
    zoo = new Zoo();
  });

  test('deve adicionar animal ao zoologico', () => {
    const animal = new Animal('Leo', 'Leao', 4);
    zoo.addAnimal(animal);

    expect(zoo.getAllAnimals()).toContain(animal);
  });

  test('deve remover animal do zoologico pelo nome', () => {
    const animal1 = new Animal('Leo', 'Leao', 4);
    const animal2 = new Animal('Bella', 'Elefante', 8);
    zoo.addAnimal(animal1);
    zoo.addAnimal(animal2);

    zoo.removeAnimal('Leo');

    expect(zoo.getAllAnimals()).not.toContain(animal1);
    expect(zoo.getAllAnimals()).toContain(animal2);
  });

  test('deve pegar animal pelo nome', () => {
    const animal = new Animal('Leo', 'Leao', 4);
    zoo.addAnimal(animal);

    const foundAnimal = zoo.getAnimal('Leo');

    expect(foundAnimal).toBe(animal);
  });

  test('deve retornar undefined caso não encontre o animal pelo nome', () => {
    const foundAnimal = zoo.getAnimal('Naoexiste');

    expect(foundAnimal).toBeUndefined();
  });

  test('deve retornar todos os animais do zoologico', () => {
    const animal1 = new Animal('Leo', 'Leao', 4);
    const animal2 = new Animal('Bella', 'Elefante', 8);
    zoo.addAnimal(animal1);
    zoo.addAnimal(animal2);

    const allAnimals = zoo.getAllAnimals();

    expect(allAnimals).toEqual([animal1, animal2]);
  });

  test('deve retornar animais pela especie', () => {
    const animal1 = new Animal('Leo', 'Leao', 4);
    const animal2 = new Animal('Bella', 'Elefante', 8);
    const animal3 = new Animal('Simba', 'Leao', 2);
    zoo.addAnimal(animal1);
    zoo.addAnimal(animal2);
    zoo.addAnimal(animal3);

    const Leaos = zoo.getAnimalsBySpecies('Leao');

    expect(Leaos).toEqual([animal1, animal3]);
  });

  test('deve retornar a media de idade dos animais', () => {
    const animal1 = new Animal('Leo', 'Leao', 4);
    const animal2 = new Animal('Luiz', 'Elefante', 8);
    zoo.addAnimal(animal1);
    zoo.addAnimal(animal2);

    const averageAge = zoo.getAverageAge();

    expect(averageAge).toBe(6);
  });

  test('deve retornar 0 como média caso nenhum animal esteja no zoologico', () => {
    const averageAge = zoo.getAverageAge();

    expect(averageAge).toBe(0);
  });
});
