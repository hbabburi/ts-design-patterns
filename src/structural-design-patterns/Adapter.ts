export interface TemperatureSensor {
    readCelsius(): number;
}

export class LegacyFahrenheitThermometer {
    readFahrenheit(): number {
        return 77;
    }
}

export class FahrenheitToCelsiusAdapter implements TemperatureSensor {
    constructor(private thermometer: LegacyFahrenheitThermometer) {}

    readCelsius(): number {
        return (this.thermometer.readFahrenheit() - 32) * 5 / 9;
    }
}
