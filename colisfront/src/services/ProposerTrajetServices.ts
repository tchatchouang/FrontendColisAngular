import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {TrajetProposer} from '../models/Trajet.Proposer.model';
import {Personnes} from "../models/person.model";
import {Trajet} from "../models/Trajet.model";

@Injectable()
export class ProposerTrajetServices {
  idp: number;
  idt: number;
  trajetProposer: TrajetProposer;
  constructor(public http: Http) {
  }

 // saveProposerTrajet(trajetProposer: TrajetProposer) {
  saveProposerTrajet(personnes: Personnes, trajet: Trajet, poidColis: number) {

    console.log('trajetProposer idPersonne !' + personnes.getIdPersonne());
    console.log('trajetProposer idTrajet !' + trajet.getIdTrajet());
    console.log('trajetProposer poid !' +  poidColis);

    return this.http.post('http://localhost:8080/personnes/saveTrajetProposer', {personnes: personnes, trajet: trajet, poidColis: poidColis})
      .map(response => response.json());
  }
}

/*
getTrajetProser(idPersonne: string) {
  return this.http.get("http://localhost:8080/personnes/TrajetProposer/find?idPersonne="+idPersonne)
    .map(response => response.json());

}*/

//return this.http.post('http://localhost:8080/trajetproposer/save', personnes, trajet)
//return this.http.post('http://localhost:8080/trajet/proposer', {personne: trajetProposer.getPersonne(), trajet: trajetProposer.getTrajet(), poidColis: trajetProposer.getPoidColis()})

//return this.http.post('http://localhost:8080/trajetproposer/save', {idt: trajet.getIdTrajet(), idp: trajet.getIdTrajet()})


//return this.http.post('http://localhost:8080/trajet/proposer', this.trajetProposer)
//.map(response => response.json());


//saveProposerTrajet(idPersonne: number, idTrajet: number, poid: number) {


//return this.http.post('http://localhost:8080/trajet/proposer', trajetProposer)
//return this.http.post("http://localhost:8080/trajet/proposer",idPersonne,idTrajet,poid)



//this.trajetProposer = new TrajetProposer(idPersonne,idTrajet, poid);
/*console.log('trajetProposer idPersonne !' + idPersonne);
this.trajetProposer.setIdPersonne(idPersonne);
this.trajetProposer.setIdTrajet(idTrajet);
this.trajetProposer.setIdColis(poid);*/
// trajetProposer.idPersonne=idPersonne;
//console.log('trajetProposer idPersonne !' + trajetProposer.getIdPersonne());
//console.log('trajetProposer idTrajet !' + trajetProposer.getIdTrajet());
//console.log('trajetProposer poid !' +  trajetProposer.getIdColis());
/*console.log('trajetProposer dateArriver !' + trajetProposer.datePropositionTrajet);
console.log('trajetProposer dateArriver !' + trajetProposer.nombreVisite);
console.log('trajetProposer dateArriver !' + trajetProposer.poidColis);*/
