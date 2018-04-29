import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
;
import 'rxjs/add/operator/map';
import {Personnes} from '../models/person.model';

@Injectable()
export class TransporteurServices {

  constructor(public http: Http) {
  }

  saveTransporteurs(person: Personnes) {
    // route de recuperation
    return this.http.post('http://localhost:8080/transpoteurs', person)
      .map(response => response.json());
  }
}
