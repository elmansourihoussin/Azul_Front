import { NgModule } from '@angular/core';
import { ClientComponent } from './client.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/core/modules/shared.module';
import { FormClientComponent } from './form-client/form-client.component';
import { CommonModule } from '@angular/common';
import { ListClientComponent } from './list-client/list-client.component';

const routers: Routes = [
  {
    path: 'form-client',
    component: FormClientComponent
  }, {
    path: 'list-client',
    component: ListClientComponent
  },
  {
    path: '',
    redirectTo: 'form-client',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routers)
  ]
})
export class ClientModule { }
