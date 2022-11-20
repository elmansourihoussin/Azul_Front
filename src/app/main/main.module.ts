import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../core/modules/shared.module';
import { PagesModule } from './content/pages/pages.module';
import { ClientModule } from './content/apps/client/client.module';
import { ListClientModule } from './content/apps/client/list-client/list-client.module';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ToolbarComponent,
    NavbarComponent,
    ContentComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    PagesModule,
    ClientModule,
    ListClientModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
