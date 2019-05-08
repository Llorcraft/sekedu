import { Component, Input, ViewEncapsulation, Host, HostBinding } from '@angular/core';

@Component({
    selector: 'icon-button',
    templateUrl: './iconButtom.component.html',
    styleUrls: ['./iconButton.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class IconButtonComponent {
    @Input() icon: string = '';
    @Input() title: string = '';
    @Input() text: string = ''
    
}
