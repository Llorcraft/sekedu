import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuApp } from 'src/models';
import { AppsService } from 'src/services';

@Component({
    selector: 'menu-apps',
    templateUrl: './menuApps.component.html',
    styleUrls: ['./menuApps.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [AppsService]
})
export class MenuAppsComponent implements OnInit {
    apps: MenuApp[] = [];

    constructor(private appService: AppsService) { }

    ngOnInit(): void {
        this.getApps();
    }

    async getApps() {
        this.apps = await this.appService.getApps();
    }
}
