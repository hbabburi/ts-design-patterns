export interface Observer {
    update(temperature: number): void;
}

export class WeatherStation {
    private observers: Observer[] = [];

    subscribe(observer: Observer): void {
        this.observers.push(observer);
    }

    setTemperature(temperature: number): void {
        for (const observer of this.observers) {
            observer.update(temperature);
        }
    }
}

export class TemperatureDisplay implements Observer {
    private temperature = 0;

    update(temperature: number): void {
        this.temperature = temperature;
    }

    getTemperature(): number {
        return this.temperature;
    }
}
