import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'apps/login',
    loadChildren: () => import('./main/content/pages/authentification/authentification.module').then(x => x.AuthentificationModule)
  },
  {
    path: 'apps/clients',
    loadChildren: () => import('./main/content/apps/client/client.module').then(x => x.ClientModule)
  },
  {
    path: 'apps/list-clients',
    loadChildren: () => import('./main/content/apps/client/list-client/list-client.module').then(x => x.ListClientModule)
  },
  {
    path: 'apps/form-client',
    loadChildren: () => import('./main/content/apps/client/form-client/form-client.module').then(x => x.FormClientModule)
  },
  {
    path:'',
    redirectTo: 'apps/clients',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'apps/clients'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
