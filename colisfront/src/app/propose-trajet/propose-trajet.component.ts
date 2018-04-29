import {Component, OnInit, style} from '@angular/core';
import {TrajetServices} from '../../services/TrajetServices';
import {CookieService} from "ngx-cookie-service";
import {TrajetProposer} from "../../models/Trajet.Proposer.model";
import {ProposerTrajetServices} from "../../services/ProposerTrajetServices";
import {Personnes} from "../../models/person.model";
import {Trajet} from "../../models/Trajet.model";


import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import { ViewChild, ElementRef, NgZone } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-propose-trajet',
  templateUrl: './propose-trajet.component.html',
  styleUrls: ['./propose-trajet.component.css'],
})
export class ProposeTrajetComponent implements OnInit {

  @ViewChild('f') public formulaire: ElementRef;
  @ViewChild('lieuDepart') public lieuDepart: ElementRef;
  @ViewChild('lieuArriver') public lieuArriver: ElementRef;
  //@ViewChild('dateArriver') public dateArriver: ElementRef;
 // @ViewChild('dateDepart') public dateDepart: ElementRef;
 // @ViewChild('poidColis') public poidColis: number;

  heroes: any;
  cookieIdPersonne = 'UNKNOWN';
  idPersonne: number;
  idTrajet: number;
  poidColis: number;

  trajetProposer: TrajetProposer;
  personne: Personnes;
  trajet: Trajet;
  test: any;
  form: FormGroup;
  lieuDep : any;
  lieuArr : any;
  photoPaysDepart : any;
  photoPaysArrive : any;
  paysPaysDepart : any=[];
  paysPaysArrive : any=[];
  constructor(public trajetService: TrajetServices, private proposerTrajetServices: ProposerTrajetServices, private cookieService: CookieService,
              private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

  ngOnInit() {
    this.cookieIdPersonne = this.cookieService.get('cookieIdPersonne');
    this.mapsAPILoader.load().then(
      () => {
        let autocompleteLieuDepart = new google.maps.places.Autocomplete(this.lieuDepart.nativeElement, { types:["geocode"] });
        let autocompleteLieuArriver = new google.maps.places.Autocomplete(this.lieuArriver.nativeElement, { types:["geocode"] });

        autocompleteLieuDepart.addListener("place_changed", () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocompleteLieuDepart.getPlace();
            this.lieuDep = place.name;
            this.photoPaysDepart = place.icon;
            this.paysPaysDepart  = place.formatted_address.split(",")
            console.log('autocomplete :' + place.name);
            console.log('photos :' + place.icon);
            console.log('autocomplete :' + place.formatted_address);
            console.log('jjj :' + place.types[ "postal_code" ]);
            console.log('jjj :' + place.formatted_address);
            if(place.geometry === undefined || place.geometry === null ){
              return;
            }
          });
        });

        autocompleteLieuArriver.addListener("place_changed", () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocompleteLieuArriver.getPlace();
            let placep: google.maps.places.PhotoOptions = autocompleteLieuArriver.getPlace();
            this.lieuArr = place.name;
            this.photoPaysArrive = place.icon;
            this.paysPaysArrive  = place.formatted_address.split(",")
            console.log('autocomplete :' + place.name);
            console.log('photos :' + place.address_components);
            console.log('autocomplete :' + place.formatted_address);
            console.log('jjj :' + place.types[ "postal_code" ]);
            console.log('jjj :' + place.formatted_address);
            if(place.geometry === undefined || place.geometry === null ){
              return;
            }
          });
        });

      }
    );
  }

  onTrajet(dataForm){

    //console.log("hhh  "+this.dateArriver.nativeElement.value);

    this.form = dataForm;

    const form = new FormGroup({
      libelleTrajet: new FormControl(),
      lieuDepart: new FormControl(),
      lieuArriver: new FormControl(),
      dateDepart: new FormControl(),
      dateArriver: new FormControl(),
      photoPaysDepart: new FormControl(),
      photoPaysArrive: new FormControl(),
      paysDepart: new FormControl(),
      paysArrive: new FormControl(),
    });

    form.patchValue({
      libelleTrajet: dataForm["libelleTrajet"],
      lieuDepart: this.lieuDep,
      lieuArriver: this.lieuArr,
      dateDepart: dataForm["dateDepart"],//this.dateDepart.nativeElement.value,
      dateArriver: dataForm["dateArriver"],//this.dateArriver.nativeElement.value,
      photoPaysDepart: this.photoPaysDepart,
      photoPaysArrive: this.photoPaysArrive,
      paysDepart: this.paysPaysDepart[1],
      paysArrive: this.paysPaysArrive[1],
    });
    console.log(form.value);   // {first: 'Nancy', last: null}


    this.trajetService.saveTrajet(form.value)
      .subscribe( data => {
        this.idTrajet = data["idTrajet"];
        this.poidColis = dataForm["poidColis"];

          this.idPersonne = parseInt(this.cookieIdPersonne, 10);
          this.personne = new Personnes(this.idPersonne)
          this.trajet = new Trajet(this.idTrajet);
          this.trajetProposer = new TrajetProposer(this.personne, this.trajet, this.poidColis);

          //this.proposerTrajetServices.saveProposerTrajet(this.trajetProposer )
          this.proposerTrajetServices.saveProposerTrajet(this.personne, this.trajet, this.poidColis)
            .subscribe( data => {
                console.log("value de data proposer trajet");
                console.log(data);

              },
              err => {
                console.log("impossible de save un propser trajet :"+err);
              }
            );
        },
        err => {
          console.log("impossible de save un trajet :"+err);
        }
      );
    form.reset();
  }
  addHero(newHero: string) {
    this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

}

//this.personne.setIdPersonne(this.idPersonne);
//this.trajet.setIdTrajet(this.idTrajet);

/*this.trajetProposer.setPersonne(this.personne);
this.trajetProposer.setTrajet(this.trajet);
this.trajetProposer.setPoidColis(this.poidColis);*/

//this.trajetProposer.setIdPersonne(this.idPersonne);

//this.trajetProposer = new TrajetProposer("idPersonne": this.idPersonne, "idTrajet": this.idPersonne, "poidColis": this.poidColis);
// this.test = {idPersonne: this.idPersonne, idTrajet : this.idTrajet, poidColis: this.poidColis}


//this.proposerTrajetServices.saveProposerTrajet(this.idPersonne, data["idTrajet"],dataForm["poidColis"])

/* console.log("value de data");
       console.log(data);
       console.log(data["idTrajet"]);
       console.log('idPersonne ok !' +this.idPersonne);
       console.log('idTrajet ok !' + data["idTrajet"]);
       console.log('dateArriver ok !' + this.myDate);

       console.log('poidColis !' + dataForm["poidColis"]);*/

/*console.log('libelleTrajet ' + dataForm["libelleTrajet"]);
    console.log('lieuDepart !' + dataForm["lieuDepart"]);
    console.log('dateDepart !' + dataForm["dateDepart"]);
    console.log('lieuArriver !' + dataForm["lieuArriver"]);
    console.log('dateArriver !' + dataForm["dateArriver"]);
    console.log('poidColis !' + dataForm["poidColis"]);
    console.log('this.cookieIdPersonne String !' + this.cookieIdPersonne);
    console.log('this.cookieIdPersonne  int!' + parseInt(this.cookieIdPersonne, 10));
    this.idPersonne = parseInt(this.cookieIdPersonne, 10);
    this.myDate = new Date();
    this.year=this.myDate.getFullYear();
    this.month=this.myDate.getMonth()+1;
    this.day=this.myDate.getDate();
    console.log('myDate ' +this.year);
    console.log('myDate ' +this.month);
    console.log('myDate ' +this.day);
    this.myDate = new Date(this.year+"/"+this.month+"/"+this.day);*/
