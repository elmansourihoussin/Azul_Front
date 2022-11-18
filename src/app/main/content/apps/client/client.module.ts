import { NgModule } from '@angular/core';
import { ClientComponent } from './client.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/core/modules/shared.module';
import { FormClientComponent } from './form-client/form-client.component';
import { CommonModule } from '@angular/common';

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
    CommonModule,
    SharedModule,
    RouterModule.forChild(routers)
  ]
})
export class ClientModule { }
