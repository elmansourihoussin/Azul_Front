import { NgModule } from '@angular/core';
import { AuthentificationModule } from './authentification/authentification.module';
import { SharedModule } from 'src/app/core/modules/shared.module';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    AuthentificationModule
  ]
})
export class PagesModule { }
