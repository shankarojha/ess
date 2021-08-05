import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
{path: '',redirectTo:'home', pathMatch:'full'},
{ path: '*', redirectTo: 'home' },
{ path: 'services', loadChildren: () => import('./ourservices/ourservices.module').then(m => m.OurservicesModule) },
{ path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
