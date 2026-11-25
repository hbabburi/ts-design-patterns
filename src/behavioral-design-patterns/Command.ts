export interface Command {
    execute(): string;
}

export class Light {
    turnOn(): string {
        return "Light turned on";
    }
}

export class TurnOnLightCommand implements Command {
    constructor(private light: Light) {}

    execute(): string {
        return this.light.turnOn();
    }
}

export class CommandButton {
    constructor(private command: Command) {}

    press(): string {
        return this.command.execute();
    }
}
