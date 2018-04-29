import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
  ;
import 'rxjs/add/operator/map';
import {Personnes} from '../models/person.model';

@Injectable()
export class PersonnesServices {

  constructor(public http: Http) {
  }

  getPersonnes() {
    // route de recuperation
    return this.http.get('http://localhost:8080/personnes')
                    .map(response => response.json());
  }

  savePersonnes(person: Personnes) {
    // route de recuperation
    return this.http.post('http://localhost:8080/personnes', person)
      .map(response => response.json());
  }

  getPersonnesLoginPass(loginPersonne: string, passwordPersonne: string) {
    // route de recuperation

    return this.http.get("http://localhost:8080/personnes/checkLoginPass?loginPersonne="+loginPersonne+"&passwordPersonne="+passwordPersonne)
      .map(response => response.json());

  }

  getTrajetList(idPersonne: string) {
    return this.http.get("http://localhost:8080/personnes/Trajet/list?idPersonne="+idPersonne)
      .map(response => response.json());

  }
  getAllTrajetProposer() {
    return this.http.get('http://localhost:8080/alltrajetproposer')
      .map(response => response.json());

  }
  getPersonneTrajt(idTrajet: string) {
    return this.http.get("http://localhost:8080/infoperstra?idTrajet="+idTrajet)
      .map(response => response.json());

  }
  dosearch(lieuDepart: string, lieuArriver: string, dateDepart: Date, dateArriver: Date, page: number, size: number) {
    console.log('lieuArriver : ' + lieuArriver);
    console.log('lieuDepart : ' + lieuDepart);
    return this.http.get("http://localhost:8080/dosearche?lieuDepart="+lieuDepart+"&lieuArriver="+lieuArriver+"&dateDepart="+dateDepart+"&dateArriver="
      +dateArriver+"&page="+page+"&size="+size)
      .map(response => response.json());

  }


  /*
    getAllTrajetProposerPer() {
      return this.http.get('http://localhost:8080/trajetproposersPer')
        .map(response => response.json());

    }*/

}
