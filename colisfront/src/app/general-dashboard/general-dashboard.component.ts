import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";


@Component({
  selector: 'app-general-dashboard',
  templateUrl: './general-dashboard.component.html',
  styleUrls: ['./general-dashboard.component.css']
})
export class GeneralDashboardComponent implements OnInit {

  cookieNombreVisite = 'UNKNOWN';
  constructor(private cookieService: CookieService) {
    this.cookieNombreVisite = this.cookieService.get('nombreTrajtePublier');
  }

  ngOnInit() {
  }

}
