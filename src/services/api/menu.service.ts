import { Injectable } from '@angular/core';
import { MenuOption } from 'src/models';

@Injectable()
export class MenuService {
    getLeftOptions(): Promise<MenuOption[]> {
        return new Promise<MenuOption[]>(resolve => {
            const options = [
                new MenuOption({ icon: 'icono-menu-inicio.svg', title: 'Inicio', options: [
                    new MenuOption({ icon: 'excel.png', title: 'Excel' }),
                    new MenuOption({ icon: 'ppt.png', title: 'Power Point' }),
                    new MenuOption({ icon: 'onedrive.png', title: 'One Drive' }),
                ]}),
                new MenuOption({ icon: 'teams.png', title: 'Teams'}),
                new MenuOption({ icon: 'skype.png', title: 'Skype', options: [
                    new MenuOption({ icon: 'onenote.png', title: 'One Note' }),
                    new MenuOption({ icon: 'outlook.png', title: 'Outlook'})
                ]})
            ]
            resolve(options)
        });
    }
    async getOfficeApps(): Promise<MenuOption[]> {
        return new Promise<MenuOption[]>(resolve => {
            const apps = [
                new MenuOption({ icon: 'word.png', title: 'Word' }),
                new MenuOption({ icon: 'excel.png', title: 'Excel' }),
                new MenuOption({ icon: 'ppt.png', title: 'Power Point' }),
                new MenuOption({ icon: 'onedrive.png', title: 'One Drive' }),
                new MenuOption({ icon: 'teams.png', title: 'Teams' }),
                new MenuOption({ icon: 'skype.png', title: 'Skype' }),
                new MenuOption({ icon: 'onenote.png', title: 'One Note' }),
                new MenuOption({ icon: 'outlook.png', title: 'Outlook' }),
            ]
            resolve(apps)
        });
    }
    async getMainOptions(): Promise<MenuOption[]> {
        return new Promise<MenuOption[]>(resolve => {
            resolve([
                new MenuOption({ icon: 'collaborate-environment.png', title: 'Mi entorno Colaborativo', color: '#5552AB', notifications: [1, 2]}),
                new MenuOption({ icon: 'learning-environment.png', title: 'Mi entorno de aprendizaje', color: '#7FB423' }),
                new MenuOption({ icon: 'email.png', title: 'Correo', color: '#0072C6', notifications: [1, 2, 3]  }),
                new MenuOption({ icon: 'academic-data.png', title: 'Datos Académicos', color: '#F56B22' }),
                new MenuOption({ icon: 'sek-prime.png', title: 'Diploma SEK', color: '#32B4AF' }),
                new MenuOption({ icon: 'service-manager.png', title: 'Gestor de Servicios', color: '#BF903F' }),
                new MenuOption({ icon: 'elearning.png', title: 'E-Learning', color: '#333333' }),
                new MenuOption({ icon: 'calendar.png', title: 'Calendario', color: '#F10682' })
            ]);
        });
    }

    async getMainTools(): Promise<MenuOption[]> {
        return new Promise<MenuOption[]>(resolve => {
            resolve([
                new MenuOption({ icon: 'sphera.svg', title:'Blogosfera SEK', text: 'Lorem ipsum dolor, sit amet ladre optovul serum' }),
                new MenuOption({ icon: 'book.svg', title:'Libros', text: 'Lorem ipsum dolor, sit amet ladre optovul serum' }),
                new MenuOption({ icon: 'books.svg', title:'Biblioteca', text: 'Lorem ipsum dolor, sit amet ladre optovul serum' }),
                new MenuOption({ icon: 'documents.svg', title:'Apuntes', text: 'Lorem ipsum dolor, sit amet ladre optovul serum' }),
                new MenuOption({ icon: 'media.svg', title:'Videoteca', text: 'Lorem ipsum dolor, sit amet ladre optovul serum' }),
                new MenuOption({ icon: 'people.svg', title:'Documentos populares', text: 'Lorem ipsum dolor, sit amet ladre optovul serum' }),
            ]);
        });
    }
}

