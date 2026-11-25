export default class Report {
    constructor(
        public title: string,
        public sections: string[],
    ) {}

    clone(): Report {
        return new Report(this.title, [...this.sections]);
    }
}
