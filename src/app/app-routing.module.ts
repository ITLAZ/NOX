import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
  },
  {
    path: 'start',
    loadChildren: () => import('./pages/start/start.module').then( m => m.StartPageModule)
  },
  {
    path: '',
    component: MenuComponent, // Componente que contiene <ion-tabs>
    canActivate: [AuthGuard],
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
    path: 'notificaciones',
    loadChildren: () => import('./pages/notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
  {
    path: 'lugares-card',
    loadChildren: () => import('./pages/lugares-card/lugares-card.module').then( m => m.LugaresCardPageModule)
  },
  {
    path: 'lugares-menu/:id',
    loadChildren: () => import('./pages/lugares-menu/lugares-menu.module').then( m => m.LugaresMenuPageModule)
  },

  {
    path: 'panel-admin-2',
    loadChildren: () => import('./pages/panel-admin-2/panel-admin-2.module').then( m => m.PanelAdmin2PageModule)
  },
  {
    path: 'aniadir-menu',
    loadChildren: () => import('./pages/aniadir-menu/aniadir-menu.module').then( m => m.AniadirMenuPageModule)
  },
  {
    path: 'gestion-entradas',
    loadChildren: () => import('./pages/gestion-entradas/gestion-entradas.module').then( m => m.GestionEntradasPageModule)
  },
  {
    path: 'recompensas',
    loadChildren: () => import('./pages/recompensas/recompensas.module').then( m => m.RecompensasPageModule)
  },
  {
    path: 'membresias',
    loadChildren: () => import('./pages/membresias/membresias.module').then( m => m.MembresiasPageModule)
  },
  {
    path: 'membresia-plan',
    loadChildren: () => import('./pages/membresia-plan/membresia-plan.module').then( m => m.MembresiaPlanPageModule)
  },
  {
    path: 'membresia-compra-confirmacion',
    loadChildren: () => import('./pages/membresia-compra-confirmacion/membresia-compra-confirmacion.module').then( m => m.MembresiaCompraConfirmacionPageModule)
  },
  {
    path: 'comprar-entradas/:eventoId',
    loadChildren: () => import('./pages/comprar-entradas/comprar-entradas.module').then( m => m.ComprarEntradasPageModule)
  },
  {
    path: 'editar-menu',
    loadChildren: () => import('./pages/editar-menu/editar-menu.module').then( m => m.EditarMenuPageModule)
  },
  {
    path: 'define-ubi',
    loadChildren: () => import('./pages/define-ubi/define-ubi.module').then( m => m.DefineUbiPageModule)
  },
  {
    path: 'filters',
    loadChildren: () => import('./pages/filters/filters.module').then( m => m.FiltersPageModule)
  },{
   path: 'edit-product',
    loadChildren: () => import('./pages/edit-product/edit-product.module').then( m => m.EditProductPageModule)
  },
  {
    path: 'gestionar-publicidad',
    loadChildren: () => import('./pages/gestionar-publicidad/gestionar-publicidad.module').then( m => m.GestionarPublicidadPageModule)
  },
  {
    path: 'upload-photos',
    loadChildren: () => import('./pages/upload-photos/upload-photos.module').then( m => m.UploadPhotosPageModule)
  },
  {
    path: 'gestionar-resenias',
    loadChildren: () => import('./pages/gestionar-resenias/gestionar-resenias.module').then( m => m.GestionarReseniasPageModule)
  },
  {
    path: 'my-tickets',
    loadChildren: () => import('./pages/my-tickets/my-tickets.module').then( m => m.MyTicketsPageModule)
  },
  {
    path: 'qr-ticket',
    loadChildren: () => import('./pages/qr-ticket/qr-ticket.module').then( m => m.QrTicketPageModule)
  },
  {
    path: 'list-events',
    loadChildren: () => import('./pages/list-events/list-events.module').then( m => m.ListEventsPageModule)
  },
  {
    path: 'list-locales',
    loadChildren: () => import('./pages/list-locales/list-locales.module').then( m => m.ListLocalesPageModule)
  },
    {
    path: 'new-local',
    loadChildren: () => import('./pages/new-local/new-local.module').then( m => m.NewLocalPageModule)
  },
  {
    path: 'new-event',
    loadChildren: () => import('./pages/new-event/new-event.module').then( m => m.NewEventPageModule)
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
