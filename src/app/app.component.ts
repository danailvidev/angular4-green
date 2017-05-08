import { Component } from '@angular/core';
import { GreenConfigService, GreenConfigSettings } from '../GreenApp/services/green-config.service';
import { MenuService } from '../GreenApp/services/menu.service';
import { initialMenuItems } from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private greenConfigService: GreenConfigService,
    private menuService: MenuService) {
    let config: GreenConfigSettings = {
      socialIcons: [
        { imageFile: 'assets/images/social-icons/facebook.png', alt: 'Facebook', link: 'http://www.facebook.com' },
        { imageFile: 'assets/images/social-icons/google.png', alt: 'Google +', link: 'http://www.google.com' },
        { imageFile: 'assets/images/social-icons/instagram-256.png', alt: 'Instagram', link: 'http://www.instagram.com' },
        { imageFile: 'assets/images/social-icons/linkedin.png', alt: 'LinkedIn', link: 'http://www.LinkedIn.com' },
        { imageFile: 'assets/images/social-icons/twitter-3-256.png', alt: 'Twitter', link: 'http://www.twitter.com' },
      ],
      showLanguageSelector: true,
      showStatusBar: true,
      showUserControls: true,
      showStatusBarBreakpoint: 800
    };

    greenConfigService.configure(config);

    menuService.items = initialMenuItems;
  }
}
