export class AppNotification {
	public title: string;
    public text: string;
    public date: Date = new Date();

	constructor(item?: Partial<AppNotification>) {
		if (!!item) {
			Object.assign(this, item);
		}
	}
}
