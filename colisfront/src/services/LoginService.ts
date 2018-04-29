import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Personnes} from '../models/person.model';

@Injectable()
export class LoginService {

  private isUserLoggerIn;
  private userName;
  constructor(public http: Http) {
  }

  saveDonneur(person: Personnes) {
    this.isUserLoggerIn = false;
  }

  setUserLoggerIn(){
    this.isUserLoggerIn = true;
  }


  getUserLoggerIn(){
    return this.isUserLoggerIn;
  }
}
