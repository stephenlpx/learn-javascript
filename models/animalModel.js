import { Person } from "./personModel.js";

export class Animal extends Person {
    constructor (id, name) {
        super();
        this.id = id,
        this.name = name
        this.type = 'Cat'
    }
    greet = x => console.log(this.name+' says: meow!');
    
    
}