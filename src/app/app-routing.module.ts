import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/guards/auth.guard';
import { LoggedGuard } from '@app/guards/logged.guard';
import { AuthLayoutComponent } from 'src/app/layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from 'src/app/layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/orders',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'orders',
        loadChildren: () =>
          import('src/app/modules/order-loading/order-loading.module').then(
            (m) => m.OrderLoadingModule,
          ),
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
    canActivate: [LoggedGuard],
    component: AuthLayoutComponent,
    loadChildren: () => import('src/app/modules/auth/auth.module').then((m) => m.AuthModule),
  },

  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/orders', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
