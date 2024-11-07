//Define a union type Circle and Rectangle, where each type has a unique shape property. 
//Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

class Shape {
    shape:string;
    constructor(shape:string){
        this.shape=shape
    }
}
class Circle extends Shape {
    radius:number;
    constructor(shape:string, radius:number){
        super(shape)
        this.radius = radius
    }
}
class Rectangle extends Shape {
    width:number;
    height:number;
    constructor(shape:string, width:number, height:number){
        super(shape)
        this.width = width
        this.height = height
    }
}

type MixedShape = Rectangle | Circle

const calculateShapeArea= (shape:MixedShape):number=>{
    if (shape instanceof Circle){
        return Math.PI* Math.pow(shape.radius,2)
    }
    else if(shape instanceof Rectangle){
        return shape.height*shape.width
    }
    return 0
}

console.log( calculateShapeArea(new Rectangle('rectangle',10,20)))

