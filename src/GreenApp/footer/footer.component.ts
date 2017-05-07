import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private year: any;
  private today: Date;

  constructor() { }

  ngOnInit() {
    this.today = new Date();
    this.year = this.today.getFullYear();
  }

}
