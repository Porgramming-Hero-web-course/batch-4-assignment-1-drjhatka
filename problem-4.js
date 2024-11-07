//Define a union type Circle and Rectangle, where each type has a unique shape property. 
//Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(shape) {
        this.shape = shape;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(shape, radius) {
        var _this = _super.call(this, shape) || this;
        _this.radius = radius;
        return _this;
    }
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(shape, width, height) {
        var _this = _super.call(this, shape) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    return Rectangle;
}(Shape));
var calculateShapeArea = function (shape) {
    if (shape instanceof Circle) {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else if (shape instanceof Rectangle) {
        return shape.height * shape.width;
    }
    return 0;
};
console.log(calculateShapeArea(new Rectangle('rectangle', 10, 20)));
