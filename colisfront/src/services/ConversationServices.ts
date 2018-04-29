import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConversationServices {

  constructor(public http: Http) {
  }

  getConversations(idPersonne: string) {
    return this.http.get("http://localhost:8080/conversations/listParPersonne?idPersonne="+idPersonne)
      .map(response => response.json());

  }




}
