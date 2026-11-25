export interface Button {
    render(): string;
}

export interface Checkbox {
    render(): string;
}

export abstract class AbstractFactory {
    abstract createButton(): Button;
    abstract createCheckbox(): Checkbox;
}

class WindowsButton implements Button {
    render(): string {
        return "Windows button";
    }
}

class WindowsCheckbox implements Checkbox {
    render(): string {
        return "Windows checkbox";
    }
}

class MacButton implements Button {
    render(): string {
        return "Mac button";
    }
}

class MacCheckbox implements Checkbox {
    render(): string {
        return "Mac checkbox";
    }
}

export class WindowsFactory extends AbstractFactory {
    createButton(): Button {
        return new WindowsButton();
    }

    createCheckbox(): Checkbox {
        return new WindowsCheckbox();
    }
}

export class MacFactory extends AbstractFactory {
    createButton(): Button {
        return new MacButton();
    }

    createCheckbox(): Checkbox {
        return new MacCheckbox();
    }
}
