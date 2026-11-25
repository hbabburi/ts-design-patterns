export interface BooleanExpression {
    interpret(context: Record<string, boolean>): boolean;
}

export class VariableExpression implements BooleanExpression {
    constructor(private name: string) {}

    interpret(context: Record<string, boolean>): boolean {
        return context[this.name] === true;
    }
}

export class AndExpression implements BooleanExpression {
    constructor(
        private left: BooleanExpression,
        private right: BooleanExpression,
    ) {}

    interpret(context: Record<string, boolean>): boolean {
        return this.left.interpret(context) && this.right.interpret(context);
    }
}
