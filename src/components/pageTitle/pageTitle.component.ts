import { Component, Input } from '@angular/core';

@Component({
    selector: 'pagetitle',
    templateUrl: './pageTitle.component.html',
    styleUrls: ['./pageTitle.component.scss']
})
export class PageTitleComponent {
    @Input() text: string;
    @Input() icon: string;
}
