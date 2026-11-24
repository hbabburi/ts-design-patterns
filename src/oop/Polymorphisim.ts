export abstract class Shape {
    abstract getArea(): number;
}

export class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

export class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    getArea(): number {
        return this.width * this.height;
    }
}
