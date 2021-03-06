import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class LayoutService {
    constructor (){
        this.onThemeChange = new  EventEmitter<string>();
    }

	collapsed = !1;
	theme = 'dark';

	toggleFullscreen(elem: any) {
		elem = elem || document.documentElement;
		if (
			!document['fullscreenElement'] &&
			!document['mozFullScreenElement'] &&
			!document['webkitFullscreenElement'] &&
			!document['msFullscreenElement']
		) {
			if (elem.requestFullscreen) {
				elem.requestFullscreen();
			} else if (elem.msRequestFullscreen) {
				elem.msRequestFullscreen();
			} else if (elem.mozRequestFullScreen) {
				elem.mozRequestFullScreen();
			} else if (elem.webkitRequestFullscreen) {
				elem.webkitRequestFullscreen(Element['ALLOW_KEYBOARD_INPUT']);
			}
		} else {
			if (document['exitFullscreen']) {
				document['exitFullscreen']();
			} else if (document['msExitFullscreen']) {
				document['msExitFullscreen']();
			} else if (document['mozCancelFullScreen']) {
				document['mozCancelFullScreen']();
			} else if (document['webkitExitFullscreen']) {
				document['webkitExitFullscreen']();
			}
		}
	}

	toggleCollapsed() {
		this.collapsed = !this.collapsed;
	}

    onThemeChange: EventEmitter<string>;
	toggleTheme() {
        this.theme = this.theme == 'light' ? 'dark' : 'light';
        this.onThemeChange.emit(this.theme);
	}
}
