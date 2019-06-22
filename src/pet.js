const MAXIMUM_FITNESS = 10;
function Pet (name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}
Pet.prototype = {
    growUp: function () {
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    },
    walk: function () {
        this.fitness > 6 ? this.fitness = 10 : this.fitness += 4;
    },
    feed: function () {
        this.hunger < 3 ? this.hunger = 0 : this.hunger -= 3
    },
    checkup: function () {
        return (this.fitness <= 3) ? 'I need a walk' 
        : (this.hunger >= 5) ? 'I am hungry' 
        : ((this.fitness <= 3) && (this.hunger >= 5)) ? 'I am hungry AND I need a walk' 
        : 'I feel great!';
    } 
};

module.exports = Pet;