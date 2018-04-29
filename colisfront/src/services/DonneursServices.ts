import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Personnes} from '../models/person.model';

@Injectable()
export class DonneursServices {

  constructor(public http: Http) {
  }

  saveDonneur(person: Personnes) {
    // route de recuperation
    return this.http.post('http://localhost:8080/donneurs', person)
      .map(response => response.json());
  }
}
