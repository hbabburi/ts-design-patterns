export abstract class Beverage {
    prepare(): string[] {
        return [
            "Boil water",
            this.brew(),
            "Pour into cup",
            this.addCondiments(),
        ];
    }

    protected abstract brew(): string;
    protected abstract addCondiments(): string;
}

export class Tea extends Beverage {
    protected brew(): string {
        return "Steep the tea";
    }

    protected addCondiments(): string {
        return "Add lemon";
    }
}

export class Coffee extends Beverage {
    protected brew(): string {
        return "Brew the coffee";
    }

    protected addCondiments(): string {
        return "Add sugar and milk";
    }
}
