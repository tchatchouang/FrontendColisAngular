import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  cookieNomPersonne = 'UNKNOWN';
  cookiePrenomPersonne = 'UNKNOWN';
  userStat = 'UNKNOWN';

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.cookieNomPersonne = this.cookieService.get('cookieNomPersonne');
    this.cookiePrenomPersonne = this.cookieService.get('cookiePrenomPersonne');
    this.userStat = this.cookieService.get('userStat');
  }

}
