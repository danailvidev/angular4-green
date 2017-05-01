import { Injectable } from '@angular/core';

export interface IconFiles {
  imageFile: string,
  alt: string,
  link: string
}

export interface GreenConfigSettings {
  showLanguageSelector?: boolean,
  showUserControls?: boolean,
  showStatusBar?: boolean,
  showStatusBarBreakpoint?: Number,
  socialIcons?: Array<IconFiles>
}

@Injectable()
export class GreenConfigService {

  showLanguageSelector = true;
  showUserControls = true;
  showStatusBar = true;
  showStatusBarBreakpoint = 0;
  socialIcons = new Array<IconFiles>();

  configure(settings: GreenConfigSettings): void {
    Object.assign(this, settings)
  }

}
