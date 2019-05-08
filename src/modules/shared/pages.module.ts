import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPage } from 'src/pages';
import { SharedComponentsModule } from './components.module';
import { MaterialModule } from './material.module';

@NgModule({
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: [
        DashboardPage
    ],
    imports: [
        CommonModule,
        SharedComponentsModule,
        MaterialModule
    ],
    exports: [
        DashboardPage
    ]
})
export class PageModules { }