export class TreeType {
    constructor(
        public readonly species: string,
        public readonly color: string,
    ) {}
}

export class TreeTypeFactory {
    private static treeTypes = new Map<string, TreeType>();

    static getTreeType(species: string, color: string): TreeType {
        const key = `${species}:${color}`;
        let treeType = this.treeTypes.get(key);

        if (!treeType) {
            treeType = new TreeType(species, color);
            this.treeTypes.set(key, treeType);
        }

        return treeType;
    }
}

export class Tree {
    constructor(
        private x: number,
        private y: number,
        private type: TreeType,
    ) {}

    describe(): string {
        return `${this.type.color} ${this.type.species} tree at (${this.x}, ${this.y})`;
    }
}
