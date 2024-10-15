//construction method

function Car( name , brand ,  year){
    this.name = name
    this.brand = brand;
    this.year = year;
}

Car.prototype.showPreview = function(){
    console.log(`${this.brand} ${this.name} ( ${this.year} )`);
}

const myCar = new Car('civic' , 'honda' , '2022')
myCar.showPreview()