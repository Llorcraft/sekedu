import { Component, ViewEncapsulation } from '@angular/core';
import { MenuOption } from 'src/models';
import { MenuService } from 'src/services';

@Component({
    selector: 'main-options',
    templateUrl: './mainOptions.component.html',
    styleUrls: ['./mainOptions.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [MenuService]

})
export class MainOptionsComponent {
    options: MenuOption[] = [];
    constructor(private menuService: MenuService) { 
        this.loadOptions();
    }

    loadOptions = async () => this.options = await this.menuService.getMainOptions();
}
