import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { GreenBodyComponent } from './green-body/green-body.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopBarComponent } from './top-bar/top-bar.component';

//services
import { GreenConfigService } from './services/green-config.service';
import { ScreenService } from './services/screen.service';


//directives 
import { ScreenLarge } from './directives/screen-large.directive';
import { ScreenBelowLarge } from './directives/screen-below-large.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GreenBodyComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    TopBarComponent,
    ScreenLarge,
    ScreenBelowLarge
  ],
  providers: [
    GreenConfigService,
    ScreenService
  ],
  exports: [
    GreenBodyComponent
  ]
})
export class GreenModule { }
