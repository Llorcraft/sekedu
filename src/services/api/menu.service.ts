import { Injectable } from '@angular/core';
import { MenuOption } from 'src/models';

@Injectable()
export class MenuService {
    getLeftOptions(): Promise<MenuOption[]> {
        return new Promise<MenuOption[]>(resolve => {
            const options = [
                new MenuOption({ icon: 'icon-menu-inicio', title: 'Inicio'}),
                new MenuOption({ icon: 'icon-menu-colaborativo', title: 'Mi entorno Colaborativo'}),
                new MenuOption({ icon: 'icon-menu-entorno-aprendizaje', title: 'Mi entorno de Aprendizaje'}),
                new MenuOption({ icon: 'icon-menu-correo', title: 'Correo'}),
                new MenuOption({ icon: 'icon-menu-datos-academicos', title: 'Datos Académicos'}),
                new MenuOption({ icon: 'icon-menu-gestor-servicios', title: 'Gestor de Servicios'}),
                new MenuOption({ icon: 'icon-menu-portfolio-digital', title: 'Portfolio Digital'}),
                new MenuOption({ icon: 'icon-menu-calendarios', title: 'Calendarios'}),
                new MenuOption({ icon: 'icon-menu-herramientas', title: 'Herramientas', options: [
                    new MenuOption({ icon: 'icon-blogosfera', title: 'Blogosfera' }),
                    new MenuOption({ icon: 'icon-libro', title: 'Libros'}),
                    new MenuOption({ icon: 'icon-biblioteca', title: 'Biblioteca'}),
                    new MenuOption({ icon: 'icon-apuntes', title: 'Apuntes'}),
                    new MenuOption({ icon: 'icon-videoteca', title: 'Videoteca'}),
                    new MenuOption({ icon: 'icon-documentos', title: 'Documentos Populares'})
                ]}),
                new MenuOption({ icon: 'icon-menu-ofimatica', title: 'Ofimática'}),
                new MenuOption({ icon: 'icon-menu-ausencias', title: 'Ausencias'}),
                new MenuOption({ icon: 'icon-menu-usuario', title: 'Usuario'}),
                new MenuOption({ icon: 'icon-menu-ajustes', title: 'Ajustes'}),
                new MenuOption({ icon: 'icon-menu-cerrar-sesion', title: 'Cerrar Sesión'})
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
                new MenuOption({ icon: 'icon-blogosfera', title: 'Blogosfera SEK', text: 'Lorem ipsum dolor, sit amet ladre optovul serum' }),
                new MenuOption({ icon: 'icon-libro', title: 'Libros', text: 'Lorem ipsum dolor, sit amet ladre optovul serum' }),
                new MenuOption({ icon: 'icon-biblioteca', title: 'Biblioteca', text: 'Lorem ipsum dolor, sit amet ladre optovul serum' }),
                new MenuOption({ icon: 'icon-apuntes', title: 'Apuntes', text: 'Lorem ipsum dolor, sit amet ladre optovul serum' }),
                new MenuOption({ icon: 'icon-videoteca', title: 'Videoteca', text: 'Lorem ipsum dolor, sit amet ladre optovul serum' }),
                new MenuOption({ icon: 'icon-documentos', title: 'Documentos populares', text: 'Lorem ipsum dolor, sit amet ladre optovul serum' }),
            ]);
        });
    }
}

