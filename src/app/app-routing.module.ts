import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderModule } from 'src/app/modules/orders/order.module';
import { AuthLayoutComponent } from 'src/app/layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from 'src/app/layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ContentLayoutComponent,
    // TODO: auth guard
    children: [
      {
        path: 'orders',
        loadChildren: () =>
          import('src/app/modules/orders/order.module').then((m) => m.OrderModule),
      },
      {
        path: 'inventory',
        loadChildren: () =>
          import('src/app/modules/inventory/inventory.module').then((m) => m.InventoryModule),
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () => import('src/app/modules/auth/auth.module').then((m) => m.AuthModule),
  },

  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
