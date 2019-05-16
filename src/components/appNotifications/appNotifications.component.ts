import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { NotificationsService } from 'src/services';
import { AppNotification } from 'src/models';

@Component({
    selector: 'app-notifications',
    templateUrl: './appNotifications.component.html',
    styleUrls: ['./appNotifications.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [NotificationsService]
})
export class AppNotificationsComponent implements OnInit {
    notifications: AppNotification[] = [];
    @HostBinding('class.shown') visible = true;

    constructor(private service: NotificationsService) { }

    ngOnInit(): void {
        this.loadNotifications();
    }

    async loadNotifications() {
        this.notifications = await this.service.getNotifications();
    }

    toggle() {
        this.visible = !this.visible;
    }
}
