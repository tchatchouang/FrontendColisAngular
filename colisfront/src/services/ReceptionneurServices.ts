import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
;
import 'rxjs/add/operator/map';
import {Personnes} from '../models/person.model';

@Injectable()
export class ReceptionneurServices {

  constructor(public http: Http) {
  }

  saveReceptionneur(person: Personnes) {
    // route de recuperation
    return this.http.post('http://localhost:8080/receptionneurs', person)
      .map(response => response.json());
  }
}
