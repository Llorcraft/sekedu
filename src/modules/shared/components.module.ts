import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MainOptionsComponent,
    MainToolsComponent,
    OfficeAppsComponent,
    IconButtonComponent,
    LeftBarComponent
} from 'src/components';

@NgModule({
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: [
        MainOptionsComponent,
        MainToolsComponent,
        OfficeAppsComponent,
        IconButtonComponent,
        LeftBarComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MainOptionsComponent,
        MainToolsComponent,
        OfficeAppsComponent,
        IconButtonComponent,
        LeftBarComponent
    ]
})
export class SharedComponentsModule { }