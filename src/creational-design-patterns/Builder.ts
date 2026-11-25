export class Computer {
    constructor(
        public readonly cpu: string,
        public readonly memoryGb: number,
        public readonly storageGb: number,
    ) {}
}

export class ComputerBuilder {
    private cpu = "Basic CPU";
    private memoryGb = 8;
    private storageGb = 256;

    setCpu(cpu: string): this {
        this.cpu = cpu;
        return this;
    }

    setMemoryGb(memoryGb: number): this {
        this.memoryGb = memoryGb;
        return this;
    }

    setStorageGb(storageGb: number): this {
        this.storageGb = storageGb;
        return this;
    }

    build(): Computer {
        return new Computer(this.cpu, this.memoryGb, this.storageGb);
    }
}
