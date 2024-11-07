//Create a TypeScript class Car with properties make, model, and year. 
//Include a method getCarAge that returns the car's age based on the current year.



class Car {
    make:string;
    model:string;
    year:number;

    
    constructor(make:string, model:string, year:number){
        this.make=make
        this.model=model
        this.year=year
    }
    getCarAge():string{
        return `The Car is ${new Date().getFullYear()-this.year} years old`
    }

}
const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge());