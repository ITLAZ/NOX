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
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
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
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'lugares-test',
    loadChildren: () => import('./pages/lugares-test/lugares-test.module').then( m => m.LugaresTestPageModule)
  },
  {
    path: 'ticket-test',
    loadChildren: () => import('./pages/ticket-test/ticket-test.module').then( m => m.TicketTestPageModule)
  },
  {
    path: 'buy-check',
    loadChildren: () => import('./pages/buy-check/buy-check.module').then( m => m.BuyCheckPageModule)
  },
  {
    path: 'pay-card',
    loadChildren: () => import('./pages/pay-card/pay-card.module').then( m => m.PayCardPageModule)
  },
  {
    path: 'pay-qr',
    loadChildren: () => import('./pages/pay-qr/pay-qr.module').then( m => m.PayQRPageModule)
  },
    {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./pages/historial/historial.module').then( m => m.HistorialPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'event-detail',
    loadChildren: () => import('./pages/event-detail/event-detail.module').then( m => m.EventDetailPageModule)
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
