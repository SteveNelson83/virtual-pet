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
    it('feed method reduces hunger by 3', () => {
        const pet = new Pet();
        pet.growUp();
        pet.feed();
        expect(pet.hunger).toEqual(2);
    })
    it('feed method doesnt allow hunger to drop below zero', () => {
        const pet = new Pet();
        pet.growUp();
        pet.feed();
        pet.feed();
        expect(pet.hunger).toEqual(0);
    })
    it('checkup method returns I need a walk if fitness is 3 or lower', () => {
        const pet = new Pet();
        pet.growUp();
        pet.growUp();
        pet.feed();
        pet.growUp();
        pet.feed();
        expect(pet.checkup()).toEqual('I need a walk');
    })
    it('checkup method returns I feel great! if fit and not hungry', () => {
        const pet = new Pet();
        expect(pet.checkup()).toEqual('I feel great!');
    })
});