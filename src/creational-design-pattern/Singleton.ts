export default class Singleton {
    private static instance: Singleton | null = null;

    private constructor() {}

    static getInstance(): Singleton {
        if (Singleton.instance === null) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }
}
