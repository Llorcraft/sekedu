import { Injectable } from '@angular/core';
import { MenuApp } from 'src/models';

@Injectable()
export class AppsService {
    async getApps(): Promise<MenuApp[]> {
        return new Promise<MenuApp[]>(resolve => {
            resolve([
                new MenuApp({ prefix: 'Pr', name: 'MySek Profesional' }),
                new MenuApp({ prefix: 'Ad', name: 'MySek Admisiones' }),
                new MenuApp({ prefix: 'Ed', name: 'MySek Educativo' }),
                new MenuApp({ prefix: 'Fa', name: 'MySek Familias' }),
                new MenuApp({ prefix: 'Uc', name: 'MyUCJC' }),
                new MenuApp({ prefix: 'Al', name: 'Alumni' })
            ])
        })
    }
}