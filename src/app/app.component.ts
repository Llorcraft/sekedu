import { Component, ViewEncapsulation } from '@angular/core';
import { LayoutService } from 'src/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'My Sek';

  constructor(public layout: LayoutService){
  }
}
