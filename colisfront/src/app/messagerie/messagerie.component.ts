import { Component, OnInit } from '@angular/core';
import {ConversationServices} from "../../services/ConversationServices";
import {CookieService} from "ngx-cookie-service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {

  listConversation : any;
  cookieIdPersonne = 'UNKNOWN';
  positionPersonne: number;
  i: number = 0;
  idPersonneNumber: number;

  constructor(private conversationServices: ConversationServices, private cookieService: CookieService) {
    this.cookieIdPersonne = this.cookieService.get('cookieIdPersonne');
    this.idPersonneNumber = Number(this.cookieIdPersonne);
  }

  ngOnInit() {

    this.conversationServices.getConversations(this.cookieIdPersonne)
    .subscribe( data => {
          // recupération des données
          this.listConversation = data;
       // console.log("donnedd: "+ data[1].personnes1.nomPersonne);
          if(data[this.i].personnes1.idPersonne == Number(this.cookieIdPersonne)){
            console.log("donne : "+ data[0].personnes2.idPersonne);
            this.positionPersonne = 2; // afficher personne 2
          }else {
            this.positionPersonne = 1; // afficher personne 1
            console.log("donne : "+ data[0].personnes1.idPersonne);
          }
          this.i ++;
        },
        err => {
          console.log('Oops!');
        }
      );
    console.log("positionPersonne : "+ Number(this.cookieIdPersonne));
  }


}
