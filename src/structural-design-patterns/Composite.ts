export interface FileSystemItem {
    getSize(): number;
}

export class File implements FileSystemItem {
    constructor(private size: number) {}

    getSize(): number {
        return this.size;
    }
}

export class Folder implements FileSystemItem {
    private items: FileSystemItem[] = [];

    add(item: FileSystemItem): void {
        this.items.push(item);
    }

    getSize(): number {
        return this.items.reduce((total, item) => total + item.getSize(), 0);
    }
}
