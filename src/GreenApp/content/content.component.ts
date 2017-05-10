import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'dv-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  private menuService: MenuService;
  constructor(menuService: MenuService) {
    this.menuService = menuService;
    console.log(menuService.isVertical)
  }

  ngOnInit() {
  }

}
