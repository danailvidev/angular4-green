import { Component, OnInit } from '@angular/core';
import {GreenConfigService} from '../services/green-config.service';

@Component({
  selector: 'dv-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(private greenConfigService: GreenConfigService) { }

  ngOnInit() {
  }

}
