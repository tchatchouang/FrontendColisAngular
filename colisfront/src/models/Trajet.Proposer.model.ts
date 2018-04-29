import {Personnes} from './person.model';
import {Trajet} from './Trajet.model';

export class TrajetProposer {
  personnes: Personnes;
  trajet: Trajet;
  //idPersonne: number ;
  //idTrajet: number ;
  //datePropositionTrajet: Date;
  //nombreVisite: number;
  poidColis: number;

  constructor( personnes: Personnes, trajet: Trajet,poidColis: number){ //, datePropositionTrajet: Date,   nombreVisite: number,  poidColis: number) {
    this.personnes = personnes;
    this.trajet = trajet;
   // this.datePropositionTrajet = datePropositionTrajet;
    //this.nombreVisite = nombreVisite;
    this.poidColis = poidColis;
  }

  public  getPersonne (): Personnes {
    return this.personnes;
  }
  public setPersonne(personnes: Personnes) {
    this.personnes = personnes;
  }

  public  getTrajet (): Trajet {
    return  this.trajet;
  }
  public setTrajet(trajet: Trajet) {
    this.trajet = trajet;
  }
  public  getPoidColis (): number {
    return  this.poidColis;
  }
  public setPoidColis(poidColis: number) {
    this.poidColis = poidColis;
  }
}
