export interface Image {
    display(): void;
}

export class RealImage implements Image {
    constructor(private fileName: string) {
        console.log(`Loading ${fileName}`);
    }

    display(): void {
        console.log(`Displaying ${this.fileName}`);
    }
}

export class ImageProxy implements Image {
    private image: RealImage | null = null;

    constructor(private fileName: string) {}

    display(): void {
        if (this.image === null) {
            this.image = new RealImage(this.fileName);
        }

        this.image.display();
    }
}
