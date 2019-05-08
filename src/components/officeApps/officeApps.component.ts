import { Component, ViewEncapsulation } from '@angular/core';
import { MenuOption } from 'src/models';
import { MenuService } from 'src/services';

@Component({
    selector: 'office-apps',
    templateUrl: './officeApps.component.html',
    styleUrls: ['./officeApps.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [MenuService]

})
export class OfficeAppsComponent {
    options: MenuOption[] = [];
    constructor(private menuService: MenuService) { 
        this.loadOptions();
    }

    loadOptions = async () => this.options = await this.menuService.getOfficeApps();
}
