import { Component, OnInit } from '@angular/core';
import { GreenConfigService } from '../services/green-config.service';
import { UserApi } from "GreenApp/users/user-api";

@Component({
  selector: 'dv-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  userName = null;

  constructor(private greenConfigService: GreenConfigService, private userApi: UserApi) { }

  ngOnInit() {
    this.userName = this.userApi.getUsername();
  }

  signOut(){
    this.userApi.signOut();
  }

}
