export class MenuApp {
    public prefix: string;
    public name: string;
    public ur: string;
    public get text(): string {
        let _splitter = this.name.trim().split(/ /g);
        if (_splitter.length == 1)
            return `<strong>${_splitter[0]}</strong>`;
        else
            return `${_splitter[0]}<strong> ${_splitter.splice(1).join(' ')}</strong>`;

    };

    constructor(item?: Partial<MenuApp>) {
        if (!!item) {
            Object.assign(this, item);
        }
    }
}