
export class Person {
    constructor (id, name) {
        this.id = id,
        this.name = name,
        this.type = "Human"
        
    }
    walk = x => "Walking";
    greet = x => 'Hello'+this.name+' your given ID is '+this.id;
    
}

