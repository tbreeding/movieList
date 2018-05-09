class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major = `Undecided`) {
        super(name, age)
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        return this.hasMajor() ? `${super.getDescription()} Their major is ${this.major}.` : super.getDescription();
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        return this.hasHomeLocation() ?  
        `${super.getDescription()} I'm visiting from ${this.homeLocation}.` :
        super.getDescription();
    }
}

const me =  new Person("Tim Breeding", 36);
const anon = new Person();
const you = new Student("John Smith", 26, "Computer Science");
console.log(me.getDescription());
console.log(anon.getDescription());
console.log(you.getDescription());
console.log(you.hasMajor());

const her = new Traveler("Lenka Breeding", 36, "Prague");
console.log(her.getGreeting())