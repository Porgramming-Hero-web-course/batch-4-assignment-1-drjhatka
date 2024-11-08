//Define a union type Circle and Rectangle, where each type has a unique shape property. 
//Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
var calculateShapeArea = function (shape) {
    return "shape" in shape && shape.shape == 'circle' ? parseFloat((Math.PI * Math.pow(shape.radius, 2)).toFixed(2)) : parseFloat((shape.height * shape.width).toFixed(2));
};
console.log(calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
}));
