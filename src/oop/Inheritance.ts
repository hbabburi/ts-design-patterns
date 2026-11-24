export class Animal {
    makeSound(): string {
        return "The animal makes a sound.";
    }
}

export class Dog extends Animal {
    override makeSound(): string {
        return "The dog barks.";
    }
}
