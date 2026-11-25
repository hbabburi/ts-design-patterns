export interface Device {
    isEnabled(): boolean;
    enable(): void;
    disable(): void;
}

export class Television implements Device {
    private enabled = false;

    isEnabled(): boolean {
        return this.enabled;
    }

    enable(): void {
        this.enabled = true;
    }

    disable(): void {
        this.enabled = false;
    }
}

export abstract class RemoteControl {
    constructor(protected device: Device) {}

    togglePower(): void {
        if (this.device.isEnabled()) {
            this.device.disable();
        } else {
            this.device.enable();
        }
    }
}

export class BasicRemoteControl extends RemoteControl {}
