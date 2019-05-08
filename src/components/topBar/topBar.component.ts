import { Component, ViewEncapsulation, Input } from '@angular/core';
import { LeftBarComponent } from '../leftBar/leftBar.component';

@Component({
    selector: 'top-bar',
    templateUrl: './topBar.component.html',
    styleUrls: ['./topBar.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class TopBarComponent {
    @Input() leftBar: LeftBarComponent;
    constructor() { }

    toggleFullscreen(elem?: any) {
        elem = elem || document.documentElement;
        if ( !document['mozFullScreenElement'] &&
          !document['webkitFullscreenElement'] && !document['msFullscreenElement']) {
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
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document['msExitFullscreen']) {
            document['msExitFullscreen']();
          } else if (document['mozCancelFullScreen']) {
            document['mozCancelFullScreen']();
          } else if (document['webkitExitFullscreen']) {
            document['webkitExitFullscreen']();
          }
        }
      }
}
