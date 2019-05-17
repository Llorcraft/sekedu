import {PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
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
    AppNotificationsComponent,
    UserProfileComponent,
    PageTitleComponent
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
        AppNotificationsComponent,
        UserProfileComponent,
        PageTitleComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        PerfectScrollbarModule
    ],
    exports: [
        MainOptionsComponent,
        MainToolsComponent,
        OfficeAppsComponent,
        IconButtonComponent,
        LeftBarComponent,
        TopBarComponent,
        MenuAppsComponent,
        AppNotificationsComponent,
        UserProfileComponent,
        PerfectScrollbarModule,
        PageTitleComponent
    ],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: { suppressScrollX: true }
        }
    ]
})
export class SharedComponentsModule { }