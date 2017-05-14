import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//components
import { GreenBodyComponent } from './green-body/green-body.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { PopupMenuComponent } from './menus/popup-menu/popup-menu.component';
//services
import { GreenConfigService } from './services/green-config.service';
import { ScreenService } from './services/screen.service';
import { MenuService } from './services/menu.service';

//directives 
import { ScreenLarge } from './directives/screen-large.directive';
import { ScreenBelowLarge } from './directives/screen-below-large.directive';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    GreenBodyComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    TopBarComponent,
    ScreenLarge,
    ScreenBelowLarge,
    MenuComponent,
    MenuItemComponent,
    PopupMenuComponent
  ],
  providers: [
    GreenConfigService,
    ScreenService,
    MenuService
  ],
  exports: [
    GreenBodyComponent
  ]
})
export class GreenModule { }
