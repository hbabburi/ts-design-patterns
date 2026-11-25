export class EditorMemento {
    constructor(public readonly text: string) {}
}

export class TextEditor {
    private text = "";

    write(text: string): void {
        this.text = text;
    }

    save(): EditorMemento {
        return new EditorMemento(this.text);
    }

    restore(memento: EditorMemento): void {
        this.text = memento.text;
    }

    getText(): string {
        return this.text;
    }
}
