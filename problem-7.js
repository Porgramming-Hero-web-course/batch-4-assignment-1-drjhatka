//Create a TypeScript class Car with properties make, model, and year. 
//Include a method getCarAge that returns the car's age based on the current year.
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getCarAge = function () {
        return "The Car is ".concat(new Date().getFullYear() - this.year, " years old");
    };
    return Car;
}());
var car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge());
