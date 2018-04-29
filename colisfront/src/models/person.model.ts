export class Personnes{
  idPersonne:number;
  nomPersonne:string ="";
  prenomPersonn:string = "";
  dateNaissancePersonne: Date;
  adresseCompletePersonne: string = "";
  photoPersonne: string = "";
  numeroTelephonePersonne: number =0;
  emailPersonne: string = "";
  statusPersonne: string = "";
  paysPersonne: string = "";
  loginPersonne: string = "";
  passwordPersonne: string = "";
  typer_personne: string = "";
  code_personne: string = "";


  constructor(idPersonne: number){
    this.idPersonne = idPersonne;
  }
  public  getIdPersonne (): number {
    return  this.idPersonne;
  }
  public setIdPersonne(idPersonne: number) {
    this.idPersonne = idPersonne;
  }

}
