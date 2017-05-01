import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GreenBodyComponent } from './green-body/green-body.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {TopBarComponent} from './top-bar/top-bar.component';

import { GreenConfigService } from './services/green-config.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GreenBodyComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    TopBarComponent
  ],
  providers: [
    GreenConfigService
  ],
  exports: [
    GreenBodyComponent
  ]
})
export class GreenModule { }
