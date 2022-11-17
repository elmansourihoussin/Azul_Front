import { NgModule } from '@angular/core';
import { AuthentificationComponent } from './authentification.component';
import { SharedModule } from 'src/app/core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routers: Routes = [
  {
    path: '',
    component: AuthentificationComponent
  }
]

@NgModule({
  declarations: [
    AuthentificationComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routers)
  ]
})
export class AuthentificationModule { }
