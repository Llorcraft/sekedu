import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPage } from 'src/pages';

// Array con las rutas de este módulo. Ninguna funcional.
const routes: Routes = [
  { path: 'dashboard', component: DashboardPage },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'  },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }