import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import {UtilisateurModule} from "./utilisateur/utilisateur.module";
import {HomeModule} from "./home/home.module";

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    RouterModule,
    UtilisateurModule,
    HomeModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
