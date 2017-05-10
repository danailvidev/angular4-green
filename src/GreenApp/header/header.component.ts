import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../services/screen.service';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'dv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private screenService: ScreenService,
    private menuService: MenuService) { }

  ngOnInit() {
  }

}
