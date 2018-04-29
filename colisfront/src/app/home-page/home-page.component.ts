import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {TrajetServices} from '../../services/TrajetServices';
import {PersonnesServices} from "../../services/PersonnesServices";
import {MapsAPILoader} from "@agm/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  @ViewChild('lieuDepart') public lieuDepart: ElementRef;
  @ViewChild('lieuArriver') public lieuArriver: ElementRef;

  listTrajet : any;
  listTrajetPersonne :any;
  listTP :any;
  listPersonnes : any;

  lieuDep: string="";
  lieuArr: string="";
  dateDepart: Date;
  dateArriver: Date;


  //paysDepart: any=[];
//  poidColis: any=[];
  nomP : any=[];
  prenomP : any=[];
  photoP : any=[];
  iterator:number= 0;
  currentPage: number=0;
  size: number=3;
  pages: Array<number>;
  valeurAvis: Array<number>;
  closeResult: string;

  //classeInfo : {paysDepart: this.paysDepart, paysArrvive: this.paysArrvive, dateDepatt: this.dateDepatt, dateArrvive: this.dateArrvive}
  constructor(private trajetServices: TrajetServices, private personnesServices: PersonnesServices, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone,
              private route: ActivatedRoute, private router : Router){ }



  /*
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }*/

  ngOnInit() {
   //this.autoComplet();
    this.mapsAPILoader.load().then(
      () => {
        let autocompleteLieuDepart = new google.maps.places.Autocomplete(this.lieuDepart.nativeElement, { types:["geocode"] });
        let autocompleteLieuArriver = new google.maps.places.Autocomplete(this.lieuArriver.nativeElement, { types:["geocode"] });

        autocompleteLieuDepart.addListener("place_changed", () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocompleteLieuDepart.getPlace();
            if(place.geometry === undefined || place.geometry === null ){
              return;
            }
          });
        });

        autocompleteLieuArriver.addListener("place_changed", () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocompleteLieuArriver.getPlace();
            let placep: google.maps.places.PhotoOptions = autocompleteLieuArriver.getPlace();
            if(place.geometry === undefined || place.geometry === null ){
              return;
            }
          });
        });

      }
    );

  // this.getAllTrajetProposerPer();
   this.dosearch();
  }

  getAllTrajet(){
    this.trajetServices.getTrajets()
      .subscribe( data => {
          // recupération des données
          this.listTrajet = data;
          console.log('this.listTrajet   :!' + this.listTrajet);
        },
        err => {
          console.log('Oops!');
        }
      );
  }
  dosearch(){
   /* if (this.lieuDep == "" && this.lieuArr == "" && this.dateDepart == null && this.dateArriver == null){
      console.log('Tous null!');
      this.getAllTrajetProposerPer();
    }else {*/
      console.log('Au moin un non null!');
      this.personnesServices.dosearch(this.lieuDep, this.lieuArr, null, null, this.currentPage, this.size)
        .subscribe( data => {
            // recupération des données
            // this.listTP = data;
            this.listTrajetPersonne = data.content;
            console.log('lieuArr : ' + this.lieuArr);
            console.log('lieuDep : ' +this.lieuDep);
            console.log('length : ' +data.content.length);
            var j: number;
            for(j = 0;j < data.content.length ;j++) {
              console.log('idTrajet ok : ' + this.listTrajetPersonne[j].idTrajet);
              this.getAllTrajetByPersonne(this.listTrajetPersonne[j].idTrajet)
            }
            this.pages = new Array(data.totalPages);
          },
          err => {
            console.log('Oops!');
          }
        );
    //}
  }

  getAllTrajetByPersonne(idTrajet: string){
    this.personnesServices.getPersonneTrajt(idTrajet)
      .subscribe( data => {
          this.listPersonnes = data;
          this.nomP[this.iterator] = data['nomPersonne']; //this.listTrajetPersonne[0].nomPersonne
          this.prenomP[this.iterator] = data['prenomPersonn']; //this.listTrajetPersonne[0].prenomPersonn
          this.photoP[this.iterator] = data['photoPersonne']; //this.listTrajetPersonne[0].photoPersonne

          this.valeurAvis = new Array(5); // je fais une itialisation a chaque valeur de l avis que je recupere qui va gere des etoile en concequen

          console.log('nomP : ' +this.nomP[this.iterator]);
          console.log('prenomP : ' +this.prenomP[this.iterator]);
          this.iterator ++;
        },
        err => {
          console.log('Oops!');
        }
      );
  }

  goToPage(i: number){

    this.currentPage = i;
    this.dosearch();

  }
  showDetails(id :  number){
    this.router.navigate(['/detailsTrajet', id]);
  }


/*
  getAllTrajetProposerPer(){
    this.personnesServices.getAllTrajetProposer()
      .subscribe( data => {
          // recupération des données
          this.listTrajetPersonne = data;
          //this.listTrajetPersonne = Array.of(this.listTrajetPersonne);
          var j: number;
          for(j = 0;j < data.length ;j++) {
            console.log('idTrajet : ' + this.listTrajetPersonne[j].idTrajet);
            this.getAllTrajetByPersonne(this.listTrajetPersonne[j].idTrajet)
          }
        },
        err => {
          console.log('Oops!');
        }
      );
  }

  autoComplet(){

  }
*/
}


/*

getAllTrajetByPersonne(idPersonne: string){
    /*this.messages = [{
      "paysDepart":this.paysDepart,
      "paysArrvive":this.paysArrvive,
      "dateDepatt":this.dateDepatt,
      "dateArrvive":this.dateArrvive
    }]
//var i: number = 0;
this.personnesServices.getTrajetList(idPersonne)
  .subscribe( data => {
      // recupération des données
      this.listTrajetPersonne = data;

      // for(this.iterator =0;this.iterator<this.lenghOfData ;this.iterator++) {

      this.paysDepart[this.iterator] = this.listTrajetPersonne[0].lieuDepart;
      this.paysArrvive = this.listTrajetPersonne[0].lieuArriver;
      this.dateDepatt = this.listTrajetPersonne[0].dateDepart;
      this.dateArrvive = this.listTrajetPersonne[0].dateArriver;
      // this.iterator2 = this.iterator;
      // console.log('this.iterator2   :!' + this.iterator2);
      // console.log('this.listTrajetPersonne   :!' + this.listTrajetPersonne);
      // console.log('this.paysDepart   :!' + this.paysDepart[this.iterator]);
      console.log('this.paysDepart   :!' + this.paysDepart);
      /* console.log('this.paysArrvive   :!' + this.paysArrvive);
       console.log('this.dateDepatt   :!' + this.dateDepatt);
       console.log('this.dateArrvive   :!' + this.dateArrvive);*/
      //this.iterator++;
      // }

  /*  },
    err => {
      console.log('Oops!');
    }
  );
}
 */


  /*

  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }*/
