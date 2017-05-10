import { Component, OnInit, Input } from '@angular/core';
import { MenuService, MenuItem } from '../../services/menu.service';

@Component({
  selector: 'dv-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() item = <MenuItem>null;
  private menuService: MenuService;
  constructor(menuService: MenuService) {
    this.menuService = menuService;
  }

  ngOnInit() {
  }

}
