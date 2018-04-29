import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {ConversationServices} from "../../services/ConversationServices";

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {

  listConversation : any;
  cookieIdPersonne = 'UNKNOWN';
  positionPersonne: number;
  i: number = 0;
  idPersonneNumber: number;

  constructor(private cookieService: CookieService) {
    this.cookieIdPersonne = this.cookieService.get('cookieIdPersonne');
    this.idPersonneNumber = Number(this.cookieIdPersonne);
  }

  ngOnInit() {

  }

}
