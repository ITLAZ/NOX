import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent, // Componente que contiene <ion-tabs>
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'lugares',
        loadChildren: () => import('./pages/tabs/lugares/lugares.module').then(m => m.LugaresPageModule),
      },
      {
        path: 'eventos',
        loadChildren: () => import('./pages/tabs/eventos/eventos.module').then(m => m.EventosPageModule),
      },
      {
        path: 'perfil',
        loadChildren: () => import('./pages/tabs/perfil/perfil.module').then(m => m.PerfilPageModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'panel-admin',
    loadChildren: () => import('./pages/panel-admin/panel-admin.module').then(m => m.PanelAdminPageModule),
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule),
  },
  {
    path: 'start',
    loadChildren: () => import('./pages/start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'components-test',
    loadChildren: () => import('./testing/components-test/components-test.module').then( m => m.ComponentsTestPageModule)
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
