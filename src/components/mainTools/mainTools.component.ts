import { Component, ViewEncapsulation } from '@angular/core';
import { MenuOption } from 'src/models';
import { MenuService } from 'src/services';

@Component({
    selector: 'main-tools',
    templateUrl: './mainTools.component.html',
    styleUrls: ['./mainTools.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [MenuService]

})
export class MainToolsComponent {
    options: MenuOption[] = [];
    constructor(private menuService: MenuService) { 
        this.loadOptions();
    }

    loadOptions = async () => this.options = await this.menuService.getMainTools();
}
