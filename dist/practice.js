"use strict";
function sum(x, y) {
    return x + y;
}
sum(1, 2);
function sumArray(numbers) {
    return numbers.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    }, 0);
}
var total = sumArray([1, 2, 3, 4, 5]);
function returnNothing() {
    console.log('I am just saying hello world');
}
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(317, 68)];
shapes.map(function (value) {
    console.log(value.getArea());
});
