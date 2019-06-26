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
        const pet = new Pet();
        expect(pet.age).toEqual(0);
    })
    it('pet gains hunger and loses fitness with age', () => {
        const pet = new Pet();
        pet.growUp();
        expect(pet.hunger).toEqual(5);
        expect(pet.fitness).toEqual(7);
    })
    it('pet gains fitness after a walk', () => {
        const pet = new Pet();
        pet.fitness = 4;
        pet.walk();
        expect(pet.fitness).toEqual(8);
    })
    it('walk function does not return fitness higher than 10', () => {
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
        pet.fitness = 3;
        expect(pet.checkup()).toEqual('I need a walk');
    })
    it('checkup method returns I feel great! if fit and not hungry', () => {
        const pet = new Pet();
        expect(pet.checkup()).toEqual('I feel great!');
    })
    it('isAlive getter returns true if pet is less than 30, fit and not hungry', () => {
        const pet = new Pet();
        expect(pet.isAlive).toBe(true);
    })
    it('checkup function returns Your pet is no longer alive if pet is dead', () => {
        const pet = new Pet();
        pet.age = 30;
        expect(pet.checkup()).toEqual('Your pet is no longer alive :(');
    })
    it('growUp and walk functions throw errors if pet is dead', () => {
        const pet = new Pet();
        pet.age = 30;
        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    })
    it('adoptChild function adds child to children property array', () => {
        const parent = new Pet();
        const child = new Pet('Amelia');
        parent.adoptChild(child);
        expect(parent.children).toContain(child);
    })
    it('haveBaby function adds baby to children property array', () => {
        const pet = new Pet ();
        pet.haveBaby('Dave');
        expect(pet.children).toBeInstanceOf(Object);
    } )
});