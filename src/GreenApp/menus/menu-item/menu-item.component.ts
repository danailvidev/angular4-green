import { Component, OnInit, Input, ElementRef, HostBinding, HostListener, Renderer,
trigger, state, style, transition, animate } from '@angular/core';
import { MenuService, MenuItem } from '../../services/menu.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'dv-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  animations: [
    trigger('visibilityChanged' ,[
      transition(':enter',[
          style({opacity:0}),
          animate(250, style({opacity:1}))
      ]),
      transition(':leave',[
        animate(100, style({opacity:0}))
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {
  @Input() item = <MenuItem>null;
  @HostBinding('class.parent-is-popup')
  @Input() parentIsPopup = true;
  isActiveRoute = false;

  mouseInItem = false;
  mouseInPopup = false;
  popupLeft = 0;
  popupTop = 34;


  constructor(
    private menuService: MenuService,
    private router: Router,
    private el: ElementRef,
    private renderer: Renderer) {
  }

  checkActiveRoute(route: string) {
    this.isActiveRoute = (route == '/' + this.item.route)
  }

  ngOnInit() {
    this.checkActiveRoute(this.router.url);

    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd){
          this.checkActiveRoute(event.url);
          //console.log(event.url + ' ' + this.item.route + ' ' + this.isActiveRoute )
        }
      })
  }

  @HostListener('click', ['$event'])
  onClick(event): void {
    event.stopPropagation();

    if (this.item.submenu) {
      if (this.menuService.isVertical) {
        this.mouseInPopup = !this.mouseInPopup;
      }
    } else if (this.item.route) {
      //force horizontal menus to close by sending a mouse leave event
      let newEvent = new MouseEvent('mouseleave', { bubbles: true });
      this.renderer.invokeElementMethod(
        this.el.nativeElement, 'dispatchEvent', [newEvent]);
      this.router.navigate(['/' + this.item.route]);
    }
  }


  onPopupMouseEnter(event): void {
    if (!this.menuService.isVertical) {
      this.mouseInPopup = true;
    }
  }

  onPopupMouseLeave(event): void {
    if (!this.menuService.isVertical) {
      this.mouseInPopup = false;
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event): void {
    if (!this.menuService.isVertical) {
      this.mouseInItem = false;
    }
  }

  @HostListener('mouseenter')
  onMouseEnter(event): void {
    if (!this.menuService.isVertical) {
      if (this.item.submenu) {
        this.mouseInItem = true;
        if (this.parentIsPopup) {
          this.popupLeft = 160;
          this.popupTop = 0;
        }
      }
    }
  }

}
