import { Component, ViewEncapsulation } from '@angular/core';
import { LayoutService } from 'src/services';

@Component({
    selector: 'top-bar',
    templateUrl: './topBar.component.html',
    styleUrls: ['./topBar.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class TopBarComponent {
    constructor(public layout: LayoutService) { }
}
