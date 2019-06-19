const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    })    
    it('sets the name property', () => {
    const pet = new Pet('Fido');
    expect(pet.name).toEqual('Fido');
    })
    it('has a initial age of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    })
    it('pet gains hunger and loses fitness with age', () => {
        const pet = new Pet('Bobby');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
        expect(pet.fitness).toEqual(7);
    })
    it('pet aged 2 gains fitness after a walk', () => {
        const pet = new Pet();
        pet.growUp();
        pet.growUp();
        pet.walk();
        expect(pet.fitness).toEqual(8);
    })
    it('returns 10 for fitness after a walk when fitness was originally greater than 6', () => {
        const pet = new Pet();
        pet.growUp();
        pet.walk();
        expect(pet.fitness).toEqual(10);
    })
});