//Define a union type Circle and Rectangle, where each type has a unique shape property. 
//Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.


type Circle = {
    shape: 'circle',
    radius: number
}
type Rectangle = {
    shape: 'rectangle'
    width: number,
    height: number,
}

type Shape = Rectangle | Circle

const calculateShapeArea = (shape: Shape): number => {
    return "shape" in shape && shape.shape == 'circle' ? parseFloat((Math.PI * Math.pow(shape.radius, 2)).toFixed(2)) : parseFloat((shape.height * shape.width).toFixed(2))
}

console.log(calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
}))

