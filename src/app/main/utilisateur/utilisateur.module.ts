import { NgModule } from '@angular/core';
import { UtilisateurComponent } from './utilisateur.component';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {SharedModule} from "../../core/modules/shared.module";
import {RouterModule, Routes} from "@angular/router";
import {FormClientComponent} from "./content/apps/client/form-client/form-client.component";
import {ListClientComponent} from "./content/apps/client/list-client/list-client.component";
import {ClientModule} from "./content/apps/client/client.module";

const routes: Routes = [
  {
    path: 'form-client',
    component: UtilisateurComponent
  },
  {
    path: '',
    redirectTo: 'form-client',
    pathMatch: 'full'
  }

]


@NgModule({
  declarations: [
    UtilisateurComponent,
    HeaderComponent,
    FooterComponent,
    ToolbarComponent,
    NavbarComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class UtilisateurModule { }
