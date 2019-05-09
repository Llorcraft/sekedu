import { Injectable } from '@angular/core';
import { AppNotification } from 'src/models';

@Injectable()
export class NotificationsService {
	async getNotifications(): Promise<AppNotification[]> {
		return new Promise<AppNotification[]>((resolve) => {
			resolve([
				new AppNotification({ title: 'Notificación 1', text: 'Esta es la notificación 1' }),
				new AppNotification({ title: 'Notificación 2', text: 'Esta es la notificación 2' }),
				new AppNotification({ title: 'Notificación 3', text: 'Esta es la notificación 3' })
			]);
		});
	}
}
