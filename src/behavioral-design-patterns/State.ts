export interface TrafficLightState {
    color(): string;
    change(light: TrafficLight): void;
}

export class TrafficLight {
    private state: TrafficLightState = new RedLightState();

    change(): void {
        this.state.change(this);
    }

    setState(state: TrafficLightState): void {
        this.state = state;
    }

    color(): string {
        return this.state.color();
    }
}

class RedLightState implements TrafficLightState {
    color(): string {
        return "red";
    }

    change(light: TrafficLight): void {
        light.setState(new GreenLightState());
    }
}

class GreenLightState implements TrafficLightState {
    color(): string {
        return "green";
    }

    change(light: TrafficLight): void {
        light.setState(new YellowLightState());
    }
}

class YellowLightState implements TrafficLightState {
    color(): string {
        return "yellow";
    }

    change(light: TrafficLight): void {
        light.setState(new RedLightState());
    }
}
