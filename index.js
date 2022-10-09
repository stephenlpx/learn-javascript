import {Person} from './models/personModel.js';
import {Animal} from './models/animalModel.js';

let person1 = new Person ('123', "Stephen");
console.log(person1.greet());
console.log(person1.name + " is "+person1.walk());



let cat = new Animal ('222', "mings");
cat.greet();
console.log(cat.name + " is "+cat.walk());


console.log(cat.type);
console.log(person1.type);







