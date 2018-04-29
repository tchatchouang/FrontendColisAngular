
import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MessagesServices {

  constructor(public http: Http) {
  }
  getMessagesEnvoyers(idpersonne: number) {
    return this.http.post('http://localhost:8080/messages', idpersonne)
      .map(response => response.json());
  }

  getMessagesReu(idpersonne: number) {
    return this.http.post('http://localhost:8080/messages', idpersonne)
      .map(response => response.json());
  }

  getlistMessageFromConversation(idConversation: string) {
    return this.http.get("http://localhost:8080/messages/listMessageFromConver?idConversation="+idConversation)
      .map(response => response.json());

  }

  sendMessages(cotenueMessage: string, dateEnvoie: Date, idConversation : number, idPersonne: number) {

    console.log('cotenueMessage  !' + cotenueMessage);
    console.log('dateEnvoie  ' +  dateEnvoie);
    console.log('idConversation d ' +  Number(idConversation));
    console.log('idPersonne  d' +  Number(idPersonne));

    return this.http.post('http://localhost:8080/messages/saveMessageSend', {cotenueMessage: cotenueMessage, dateEnvoie: dateEnvoie, idConversation: idConversation, idPersonne: idPersonne})
      .map(response => response.json());
  }
  sendMessagesRecu(cotenueMessage: string,  dateEnvoie: Date, idConversation : number, idPersonne: number) {
    return this.http.post('http://localhost:8080/messages/saveMessageRecu', {cotenueMessage: cotenueMessage, dateEnvoie: dateEnvoie, idConversation: idConversation, idPersonne: idPersonne})
      .map(response => response.json());
  }


}
