export class NameCollection implements Iterable<string> {
    constructor(private names: string[]) {}

    *[Symbol.iterator](): IterableIterator<string> {
        for (const name of this.names) {
            yield name;
        }
    }
}
