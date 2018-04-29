import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Trajet} from '../models/Trajet.model';

@Injectable()
export class TrajetServices {

  constructor(public http: Http) {
  }
  saveTrajet(trajet: Trajet) {
    return this.http.post('http://localhost:8080/trajet', trajet)
      .map(response => response.json());
  }

  getTrajets(){
    return this.http.get('http://localhost:8080/trajet/all')
      .map(response => response.json());
  }



}
