function sum(x: number, y: number): number {
    return x + y;
}
sum(1, 2);

function sumArray(numbers: number[]): number {
    return numbers.reduce((previousValue, currentValue) => {
        return previousValue + currentValue
    }, 0)
}

const total = sumArray([1,2,3,4,5]);

function returnNothing(): void {
    console.log('I am just saying hello world')
}

interface Shape {
    getArea(): number;
}

class Circle implements Shape {
    constructor(public radius: number) {
        this.radius = radius;
    }

    getArea(): number {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {
        this.width = width;
        this.height = height;
    }
    getArea(): number {
        return this.width * this.height
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(317, 68)]
shapes.map(value => {
    console.log(value.getArea());
});

const circle = new Circle(5);

interface Person {
    name: string;
    age?: number;
}

interface Developer extends Person {
    skills: string[];
}

const person: Person = {
    name: '미우',
    age: 20,
};

const expert: Developer = {
    name: '에리스',
    skills: ['C#', 'Unity'],
};

const people: Person[] = [person, expert];

type Kodex = {
    name: string;
    lvl?: number;
};

type Heal = Kodex & {
    skills: string[];
};

function merge<miu, sella>(a: miu, b: sella): miu & sella {
    return {
        ...a,
        ...b,
    };
}

const merged = merge({miu: 1}, {sella: 1});

function wrap<T>(param: T) {
    return {
        param
    }
}

const wrapped = wrap(10);
