import { Component, ViewEncapsulation, HostBinding, HostListener } from '@angular/core';
import { MenuService } from 'src/services';
import { MenuOption } from 'src/models';

@Component({
    selector: 'left-bar',
    templateUrl: './leftBar.component.html',
    styleUrls: ['./leftBar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [MenuService]
})
export class LeftBarComponent {
    options: MenuOption[] = [];
    timer: any = null;
    @HostBinding('class.collapsed') collapsed: boolean = false;
    // @HostListener('mouseout') onMouseOut() {
    //     clearTimeout(this.timer);
    //     if (!this.collapsed) this.timer = setTimeout(() => this.toggle(), 100);
    // };
    // @HostListener('mouseenter') onMouseEnter() { 
    //     clearTimeout(this.timer);
    //     if (this.collapsed) this.timer = setTimeout(() => this.toggle(), 100);
    // };
    //@HostListener('click') onClick() { this.collapsed = !1; };

    constructor(private menuService: MenuService) {
        this.getOptions();
    }

    async getOptions() {
        this.options = await this.menuService.getLeftOptions();
    }

    toggle() {
        this.collapsed = !this.collapsed;
    }
}
