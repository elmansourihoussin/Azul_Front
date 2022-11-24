import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'apps/login',
    loadChildren: () => import('./main/utilisateur/content/pages/authentification/authentification.module').then(x => x.AuthentificationModule)
  },
  {
    path: 'apps/home',
    loadChildren: () => import('./main/home/home.module').then(x => x.HomeModule)
  },
  {
    path: 'apps/user',
    loadChildren: () => import('./main/utilisateur/utilisateur.module').then(x => x.UtilisateurModule)
  },
 /* {
    path: 'apps/clients',
    loadChildren: () => import('./main/utilisateur/content/apps/client/client.module').then(x => x.ClientModule)
  },
  {
    path: 'apps/list-clients',
    loadChildren: () => import('./main/utilisateur/content/apps/client/list-client/list-client.module').then(x => x.ListClientModule)
  },
  {
    path: 'apps/form-client',
    loadChildren: () => import('./main/utilisateur/content/apps/client/form-client/form-client.module').then(x => x.FormClientModule)
  },*/
  {
    path:'',
    redirectTo: 'apps/user',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'apps/user'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
