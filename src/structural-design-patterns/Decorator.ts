export interface Coffee {
    getDescription(): string;
    getCost(): number;
}

export class PlainCoffee implements Coffee {
    getDescription(): string {
        return "Coffee";
    }

    getCost(): number {
        return 2;
    }
}

abstract class CoffeeDecorator implements Coffee {
    constructor(protected coffee: Coffee) {}

    abstract getDescription(): string;
    abstract getCost(): number;
}

export class MilkDecorator extends CoffeeDecorator {
    getDescription(): string {
        return `${this.coffee.getDescription()} with milk`;
    }

    getCost(): number {
        return this.coffee.getCost() + 0.5;
    }
}

export class SugarDecorator extends CoffeeDecorator {
    getDescription(): string {
        return `${this.coffee.getDescription()} with sugar`;
    }

    getCost(): number {
        return this.coffee.getCost() + 0.25;
    }
}
