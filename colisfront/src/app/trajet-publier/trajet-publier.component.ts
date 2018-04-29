import { Component, OnInit } from '@angular/core';
import {PersonnesServices} from "../../services/PersonnesServices";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-trajet-publier',
  templateUrl: './trajet-publier.component.html',
  styleUrls: ['./trajet-publier.component.css']
})
export class TrajetPublierComponent implements OnInit {

  listPersonne: any;
  listTrajet: any;
  cookieIdPersonne = 'UNKNOWN';
  datePropositionTrajet: any;

  constructor(private personnesService: PersonnesServices, private cookieService: CookieService) {
    this.cookieIdPersonne = this.cookieService.get('cookieIdPersonne');
    console.log("id personne : "+ this.cookieIdPersonne);
  }

  ngOnInit() {
    this.personnesService.getPersonnes()
      .subscribe( data => {
          // recupération des données
          this.listPersonne = data;
        },
        err => {
          console.log('Oops!');
        }
      );
    this.personnesService.getTrajetList(this.cookieIdPersonne)
      .subscribe( data => {
          this.listTrajet = data;
          this.cookieService.set( 'nombreTrajtePublier',  data.length);
          console.log("nombre de visite  : "+ this.cookieService.get('nombreTrajtePublier'));
          //console.log("donne : "+ data[0].proposerTrajet[0].datePropositionTrajet);
        },
        err => {
          console.log('Oops!');
        }
      );

  }

}


/*
   this.proposerTrajetServices.getTrajetProser(this.cookieIdPersonne )
     .subscribe( data => {
         this.listTrajetProposer = data;
         if(data.length > 0) {
           for(var i = 0; i < data.length; i++) {
             console.log("date : "+ data[i].datePropositionTrajet);
            // this.date1.setDate(data[i].datePropositionTrajet);
             this.date1 = data[i].datePropositionTrajet;




           }
         }

       },
       err => {
         console.log('Oops!');
       }
     );*/
//this.datePropositionTrajet = data["poidColis"];
//this.date1.setDate(data["datePropositionTrajet"]);
//this.datePropositionTrajet = this.date1.getDate();



/*
  public listTP: Array<Object>;
getCategoriesFromSqlite() {
  //recuperaton des ca tegories
  this.database.executeSql("SELECT * FROM categories", []).then((data) => {
    this.listCategories = [];
    if(data.rows.length > 0) {
      for(var i = 0; i < data.rows.length; i++) {
        this.listCategories.push({id: data.rows.item(i).id, name: data.rows.item(i).name, description: data.rows.item(i).description,icon: data.rows.item(i).icon,});
        this.indexNbEnregistrement++;
      }
    }
  }, (error) => {
    console.log("ERROR: " + JSON.stringify(error));
  });
}*/

