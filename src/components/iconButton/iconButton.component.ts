import { Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'icon-button',
    templateUrl: './iconButtom.component.html',
    styleUrls: [
        './iconButton.component.scss',
        './iconButton.dark.component.scss',
        './iconButton.light.component.scss',
    ],
    encapsulation: ViewEncapsulation.None
})
export class IconButtonComponent {
    @Input() icon: string = '';
    @Input() title: string = '';
    @Input() text: string = ''
    
}
