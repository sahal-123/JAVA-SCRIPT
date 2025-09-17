// one clas can inherit properties and methods from another class


// base class
class Animal {
    constructor(name) {
        this.name = name;

    }
    speak() {  //method
        console.log(`${this.name} makes a sound`);

    }
}

// derived class inherits from animal
class Dog extends Animal {

    constructor(name, breed) {
        super(name);  //call the parantel constructure
        this.breed = breed;
    }
    // overload poly morphysm
    speak() {
        console.log(`${this.name} ${this.breed}  barks`);

    }
}
const dog = new Dog("kaiser", "germen sheperd");
dog.speak();


