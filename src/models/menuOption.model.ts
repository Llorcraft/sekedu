export class MenuOption {
    constructor(menu: Partial<MenuOption>) {
        if (!!menu) {
            Object.assign(this, menu);
            this.options = (menu.options || []).map(o => new MenuOption(o));
        }
    }

    public title: string;
    public text: string;
    public icon: string;
    public color: string;
    public url: string;
    public options: MenuOption[];
    public notifications: any[] = [];
}