export class Trajet{
  idTrajet: number;
  libelleTrajet:string ="";
  lieuDepart:string = "";
  lieuArriver:  string = "";
  dateDepart: Date;
  dateArriver: Date;
  etatTrajet: string = "";
  visibleSurCarte: boolean = true;

  constructor(idTrajet: number){
    this.idTrajet = idTrajet;
  }

  public  getIdTrajet (): number {
    return  this.idTrajet;
  }
  public setIdTrajet(idTrajet: number) {
    this.idTrajet = idTrajet;
  }



}
