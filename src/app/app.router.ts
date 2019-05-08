import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPage } from 'src/pages';

// Array con las rutas de este módulo. Ninguna funcional.
const routes: Routes = [
  { path: '', redirectTo: '' },
  { path: 'dashboard', component: DashboardPage },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes) // configuración para el módulo raíz
  ],
  exports: [
    RouterModule // se importará desde el módulo padre
  ]
})
export class AppRoutingModule { }