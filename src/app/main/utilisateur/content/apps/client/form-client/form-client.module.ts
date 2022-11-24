import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormClientComponent } from './form-client.component';
import { SharedModule } from 'src/app/core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
/*
const routes: Routes = [
  {
    path: '',
    component: FormClientComponent
  }
]*/

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class FormClientModule { }
