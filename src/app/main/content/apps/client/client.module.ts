import { NgModule } from '@angular/core';
import { ClientComponent } from './client.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/core/modules/shared.module';
import { FormClientComponent } from './form-client/form-client.component';

const routers: Routes = [
  {
    path: '',
    component: ClientComponent
  }
];

@NgModule({
  declarations: [
    ClientComponent,
    FormClientComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routers)
  ]
})
export class ClientModule { }
