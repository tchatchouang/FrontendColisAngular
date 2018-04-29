import { Component, OnInit } from '@angular/core';
import {PersonnesServices} from '../../services/PersonnesServices';

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.css']
})
export class PersonnesComponent implements OnInit {

  // listPersonne = { nom: "willi" , email:"hhh"};
  listPersonne: any;

  constructor(public personnesService: PersonnesServices) { }

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
  }

}
