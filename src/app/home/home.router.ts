import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'deposit',
        loadChildren: () => import('../pages/deposit/deposit.module').then( m => m.DepositPageModule)
      },
      {
        path: 'transfer',
        loadChildren: () => import('../pages/transfer/transfer.module').then( m => m.TransferPageModule)
      },
      {
        path: 'withdraw',
        loadChildren: () => import('../pages/withdraw/withdraw.module').then( m => m.WithdrawPageModule)
      },
      {
        path: 'password',
        loadChildren: () => import('../pages/password/password.module').then( m => m.PasswordPageModule)
      },
      {
        path: 'recharge',
        loadChildren: () => import('../pages/recharge/recharge.module').then( m => m.RechargePageModule)
      },
      {
        path: 'data',
        loadChildren: () => import('../pages/data/data.module').then( m => m.DataPageModule)
      },
      {
        path: 'buy-power',
        loadChildren: () => import('../pages/buy-power/buy-power.module').then( m => m.BuyPowerPageModule)
      },
      {
        path: 'recharge-cable',
        loadChildren: () => import('../pages/recharge-cable/recharge-cable.module').then( m => m.RechargeCablePageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRouter{}
