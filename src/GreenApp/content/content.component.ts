import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { ScreenService } from '../services/screen.service';
@Component({
  selector: 'dv-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  private menuService: MenuService;
  private screenService: ScreenService;
  constructor(
    menuService: MenuService,
    screenService: ScreenService) {
    this.menuService = menuService;
    this.screenService = screenService;
  }

  ngOnInit() {
  }

}
