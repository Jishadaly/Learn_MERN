class Animal {
    constructor(name){
        this.name = name
    }

    sayhello(){
        console.log(`hello, ${this.name} make sound!`);
    }
}

class Bird extends Animal {
    constructor(name){
        super(name)
        this.name = name
    }

    sayhello(){
        console.log(`heyyyyyyy ${this.name} will flyyy`);
    }
};

const animal = new Animal('generic animal');
animal.sayhello()
const crow = new Bird('jummy');

crow.sayhello();