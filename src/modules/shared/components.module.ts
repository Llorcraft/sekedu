import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MainOptionsComponent,
    MainToolsComponent,
    OfficeAppsComponent,
    IconButtonComponent,
    LeftBarComponent,
    TopBarComponent,
    MenuAppsComponent,
    AppNotificationsComponent
} from 'src/components';
import { MaterialModule } from './material.module';

@NgModule({
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: [
        MainOptionsComponent,
        MainToolsComponent,
        OfficeAppsComponent,
        IconButtonComponent,
        LeftBarComponent,
        TopBarComponent,
        MenuAppsComponent,
        AppNotificationsComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
    ],
    exports: [
        MainOptionsComponent,
        MainToolsComponent,
        OfficeAppsComponent,
        IconButtonComponent,
        LeftBarComponent,
        TopBarComponent,
        MenuAppsComponent,
        AppNotificationsComponent
    ]
})
export class SharedComponentsModule { }