import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListClientComponent } from './list-client.component';
import { SharedModule } from 'src/app/core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes =  [
  {
    path: '',
    component: ListClientComponent
  }
]

@NgModule({
  declarations: [
    ListClientComponent
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ListClientModule { }
