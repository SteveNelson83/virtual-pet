const MAXIMUM_FITNESS = 10;
function Pet (name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.children = [];
}

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    },
    growUp: function () {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
          }
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    },
    walk: function () {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
          }
        if (this.fitness > 6) {
            return this.fitness = 10 
        }
        return this.fitness += 4;
    },
    feed: function () {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
          }
        this.hunger < 3 ? this.hunger = 0 : this.hunger -= 3
    },
    checkup: function () {
        return (this.fitness <= 3) ? 'I need a walk' 
        : (this.hunger >= 5) ? 'I am hungry' 
        : ((this.fitness <= 3) && (this.hunger >= 5)) ? 'I am hungry AND I need a walk' 
        : this.isAlive === false ? 'Your pet is no longer alive :('
        : 'I feel great!';
    },
    adoptChild: function (child) {
        this.children.push(child);
    },
    haveBaby: function (name) {
        const baby = new Pet (name);
        this.children.push(baby);
    }
};

module.exports = Pet;