export interface DocumentVisitor {
    visitHeading(heading: Heading): string;
    visitParagraph(paragraph: Paragraph): string;
}

export interface DocumentElement {
    accept(visitor: DocumentVisitor): string;
}

export class Heading implements DocumentElement {
    constructor(public readonly text: string) {}

    accept(visitor: DocumentVisitor): string {
        return visitor.visitHeading(this);
    }
}

export class Paragraph implements DocumentElement {
    constructor(public readonly text: string) {}

    accept(visitor: DocumentVisitor): string {
        return visitor.visitParagraph(this);
    }
}

export class HtmlExportVisitor implements DocumentVisitor {
    visitHeading(heading: Heading): string {
        return `<h1>${heading.text}</h1>`;
    }

    visitParagraph(paragraph: Paragraph): string {
        return `<p>${paragraph.text}</p>`;
    }
}
