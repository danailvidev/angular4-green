import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'dv-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private menuService: any;
  constructor(menuService: MenuService) {
    this.menuService = menuService;
  }

  ngOnInit() {
  }

}
