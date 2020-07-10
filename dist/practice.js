"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var circle = new Circle(5);
var person = {
    name: '미우',
    age: 20,
};
var expert = {
    name: '에리스',
    skills: ['C#', 'Unity'],
};
var people = [person, expert];
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var merged = merge({ miu: 1 }, { sella: 1 });
function wrap(param) {
    return {
        param: param
    };
}
var wrapped = wrap(10);
