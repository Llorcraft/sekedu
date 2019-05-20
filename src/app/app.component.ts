import { Component, ViewEncapsulation, HostBinding } from '@angular/core';
import { LayoutService } from 'src/services';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss', './app.dark.component.scss', './app.light.component.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent {
	title = 'My Sek';
	@HostBinding('class.light') light = false;
	@HostBinding('class.dark') dark = true;

	constructor(public layout: LayoutService) {
		this.setHostTheme(layout.theme);
		layout.onThemeChange.subscribe((theme) => this.setHostTheme(theme));
	}

	setHostTheme(theme) {
		this.light = theme == 'light';
		this.dark = !this.light;
	}
}
