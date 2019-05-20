import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/ui/layout.service';

@Component({
    selector: 'dashboard-page',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit {
    constructor(public layout: LayoutService) { }

    ngOnInit(): void { }

    gotoAbsences = () => console.log('Go to Absences');
}
