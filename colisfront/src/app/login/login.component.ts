import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../services/LoginService";
import {CookieService} from "ngx-cookie-service";
import {PersonnesServices} from "../../services/PersonnesServices";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userStat: Boolean= false;
  //personne: any;
  personne: Array<Object>;
  username: string;
  password: any;
  nom: string;
  prenom: string;
  id: number;
  cookieIdPersonne: number;

  constructor(private router: Router, private loginService: LoginService, private cookieService: CookieService, private personneService: PersonnesServices) { }

  ngOnInit() {
  }
  loginForm(dataForm){

    this.personneService.getPersonnesLoginPass(dataForm["username"], dataForm["password"])
      .subscribe( data => {
          // recupération des données
          this.username = data["loginPersonne"];
          this.password = data["passwordPersonne"];
          this.nom      =data["nomPersonne"];
          this.prenom   =data["prenomPersonn"];
          this.id   =data["idPersonne"];


          console.log('log !' + this.username);
          console.log('pas!'  +this.password);
          if (this.username!=null && this.password !=null) {
            this.cookieService.set( 'cookieNomPersonne', this.nom );
            this.cookieService.set( 'cookiePrenomPersonne', this.prenom );
            this.cookieService.set( 'cookieIdPersonne', this.id.toString());
            this.loginService.setUserLoggerIn()
            this.router.navigate(['dashboard/general']);
          }

          console.log('log 1!' + data["loginPersonne"]);
          console.log('pas 1!'  +data["passwordPersonne"]);
          console.log('id 1!'  + this.id);

          console.log('log !' + this.username);
          console.log('pas!'  +this.password);
        },
        err => {
          console.log('Oops!');
          this.router.navigate(['home']);
        }
      );
  }
}
