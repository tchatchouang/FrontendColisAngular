import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MessagesServices} from "../../services/MessagesServices";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-messagerie-message',
  templateUrl: './messagerie-message.component.html',
  styleUrls: ['./messagerie-message.component.css']
})
export class MessagerieMessageComponent implements OnInit {

  idConversation: string;
  private sub: any;
  listMessages: any
  positionMessage: number;
  cookieIdPersonne = 'UNKNOWN';
  i: number = 0;
  image: string;
  replyMessage: any;
  messageSend: any;
  messageRecu : any;
  idPersonneNumber: number;

  constructor(private route: ActivatedRoute, private messagesServices: MessagesServices, private cookieService: CookieService) {
    this.cookieIdPersonne = this.cookieService.get('cookieIdPersonne');
    this.idPersonneNumber = Number(this.cookieIdPersonne);
  }
  ngOnInit() {
    this.getMessage();
  }

  getMessage(){
    this.sub = this.route.params.subscribe(params => {
      this.idConversation = params['idConversation']; // (+) converts string 'id' to a number
      this.messagesServices.getlistMessageFromConversation(this.idConversation)
        .subscribe( data => {
            this.listMessages = data;
          },
          err => {
            console.log('Oops!');
          }
        );

    });
  }


  getMessageReply(){
    if (this.replyMessage != null){

      console.log(' message non vide ' + this.replyMessage);
      this.messagesServices.sendMessages(this.replyMessage, new Date, Number(this.idConversation ), Number(this.cookieIdPersonne))
        .subscribe( data => {
            this.messageSend = data;
            this.getMessage();
            this.replyMessage = null;
          },
          err => {
            console.log('Oops!');
          }
        );


    }else {
      console.log(' message  vide ' + this.replyMessage);
    }


  }

  /*getMessage(){

    this.sub = this.route.params.subscribe(params => {
      this.idConversation = params['idConversation']; // (+) converts string 'id' to a number
      this.messagesServices.getlistMessageFromConversation(this.idConversation)
        .subscribe( data => {
            this.listMessages = data;
            if (this.replyMessage != null){

              console.log(' message non vide ' + this.replyMessage);
              this.messagesServices.sendMessages(this.replyMessage,'SE', new Date, Number(this.idConversation ), Number(this.cookieIdPersonne))
                .subscribe( data => {
                    // recupération des données
                    this.messageSend = data;
                    this.replyMessage = null;
                  },
                  err => {
                    console.log('Oops!');
                  }
                );


            }else {
              console.log(' message  vide ' + this.replyMessage);
            }

          },
          err => {
            console.log('Oops!');
          }
        );

    });

  }*/
  /*ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      //this.idConversation = +params['idConversation']; // (+) converts string 'id' to a number
      this.idConversation = params['idConversation']; // (+) converts string 'id' to a number

      this.messagesServices.getlistMessageFromConversation(this.idConversation)
        .subscribe( data => {
            // recupération des données
            this.listMessages = data;
            this.image = "data:image/png;base64,"+data[0].conversations.personnes1.photoPersonne;
            //console.log("images   : "+ data[0].conversations.personnes1.photoPersonne);

          },
          err => {
            console.log('Oops!');
          }
        );

    });
  }
  reply(){
    console.log('Message send : '+ this.replyMessage);
    this.listMessages.push(this.replyMessage);

    console.log('this.idConversation ' + this.idConversation);
    console.log('this.cookieIdPersonne '+ this.cookieIdPersonne);
    this.messagesServices.sendMessages(this.replyMessage,'SE', new Date, Number(this.idConversation ), Number(this.cookieIdPersonne))
      .subscribe( data => {
          // recupération des données
          this.messageSend = data;
        },
        err => {
          console.log('Oops!');
        }
      );
    this.replyMessage = "";
  }*/

}

/*if(data[this.i].conversations.personnes1.idPersonne == Number(this.cookieIdPersonne)){
              console.log("donnefff : "+ data[this.i].conversations.personnes1.idPersonne);
              this.positionMessage = 1; // afficher a droite
              console.log("afficher a droite");
              console.log(" RS  "+data[this.i].typeMessage);
            }else {
              this.positionMessage = 2; // afficher a gauche
              console.log("donnefff : "+ data[this.i].conversations.personnes2.idPersonne);
              console.log("afficher a gauche");
              console.log(" RS  "+data[this.i].typeMessage);
            }
            this.i ++;*/
/* if ((this.i +1)> data.length){
   this.i=0;
   console.log("i renitialise: " + this.i);
 }else {
   console.log("i non renitialise: " + this.i);
 }*/
