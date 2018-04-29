import { Component, OnInit } from '@angular/core';
import {Personnes} from '../../models/person.model';
import {PersonnesServices} from '../../services/PersonnesServices';
import {error} from "util";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  files : FileList;
  form: FormGroup;
  file_src:string;
  //person: Personnes = new Personnes();
  constructor(public personnessService: PersonnesServices) {
    this.file_src = "//placehold.it/200"
  }

  ngOnInit() {

  }
  /*savePersonne(){
    console.log(this.person);
    this.personService.savePersonnes(this.person)
      .subscribe( data => {
          // recupération des données
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );
  }*/

  onChange(input) {
    /*this.files = files[0].name;
    console.log(this.files);
    console.log(files);
    console.log(files[0].name);*/

    this.file_src = "//placehold.it/200";
    // Loop through each picture file
    this.files = (input.target.files[0]);

    // Create an img element and add the image file data to it
    var img = document.createElement("img");
    img.src = window.URL.createObjectURL(input.target.files[0]);

    // Create a FileReader
    var reader = new FileReader();

    // Add an event listener to deal with the file when the reader is complete
    reader.addEventListener("load", (event:any) => {
      // Get the event.target.result from the reader (base64 of the image)
      img.src = event.target.result;

      // Resize the image
      var resized_img = this.resize(img);
      // Push the img src (base64 string) into our array that we display in our html template
      this.file_src = resized_img;
    }, false);

    reader.readAsDataURL(input.target.files[0]);
    //}


  }

  imageChange(input){
    this.file_src = "//placehold.it/200";
    // Loop through each picture file
    this.files = (input.target.files[0]);

    // Create an img element and add the image file data to it
    var img = document.createElement("img");
    img.src = window.URL.createObjectURL(input.target.files[0]);

    // Create a FileReader
    var reader = new FileReader();

    // Add an event listener to deal with the file when the reader is complete
    reader.addEventListener("load", (event:any) => {
      // Get the event.target.result from the reader (base64 of the image)
      img.src = event.target.result;

      // Resize the image
      var resized_img = img.src;//this.resize(img);
      // Push the img src (base64 string) into our array that we display in our html template
      this.file_src = resized_img;
      console.log(" base 64 " + this.file_src);
    }, false);

    reader.readAsDataURL(input.target.files[0]);
    //}
  }
  resize (img, MAX_WIDTH:number = 100, MAX_HEIGHT:number = 100){
    var canvas = document.createElement("canvas");


    var width = img.width;
    var height = img.height;

    if (width > height) {
      if (width > MAX_WIDTH) {
        height *= MAX_WIDTH / width;
        width = MAX_WIDTH;
      }
    } else {
      if (height > MAX_HEIGHT) {
        width *= MAX_HEIGHT / height;
        height = MAX_HEIGHT;
      }
    }
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");

    ctx.drawImage(img, 0, 0, width, height);

    var dataUrl = canvas.toDataURL('image/jpeg');
    // IMPORTANT: 'jpeg' NOT 'jpg'
    return dataUrl
  }

  onSavePersone(dataForm){
    this.form = dataForm;

    const form = new FormGroup({
      nomPersonne: new FormControl(),
      prenomPersonn: new FormControl(),
      dateNaissancePersonne: new FormControl(),
      adresseCompletePersonne: new FormControl(),
      photoPersonne: new FormControl(),
      numeroTelephonePersonne: new FormControl(),
      emailPersonne: new FormControl(),
      statusPersonne: new FormControl(),
      paysPersonne: new FormControl(),
      loginPersonne: new FormControl(),
      passwordPersonne: new FormControl()
    });

    form.patchValue({
      nomPersonne: dataForm["nomPersonne"],
      prenomPersonn: dataForm["prenomPersonn"],
      dateNaissancePersonne: dataForm["dateNaissancePersonne"],
      adresseCompletePersonne: dataForm["adresseCompletePersonne"],
      photoPersonne: this.file_src,
      numeroTelephonePersonne: dataForm["numeroTelephonePersonne"],
      emailPersonne: dataForm["emailPersonne"],
      statusPersonne: dataForm["statusPersonne"],
      paysPersonne: dataForm["paysPersonne"],
      loginPersonne: dataForm["loginPersonne"],
      passwordPersonne: dataForm["passwordPersonne"]

    });
    console.log(form.value);   // {first: 'Nancy', last: null}

    this.personnessService.savePersonnes(form.value)
      .subscribe( data => {
          // recupération des données
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );

    /*
    if(dataForm["TYPE_PERSONNE"] == 'T'){
      this.transporteursService.saveTransporteurs(dataForm)
        .subscribe( data => {
            // recupération des données
            console.log(data);
          },
          err => {
            console.log(err);
          }
        );
    }else  if(dataForm["TYPE_PERSONNE"] == 'R'){
      this.receptionneurServices.saveReceptionneur(dataForm)
        .subscribe( data => {
            // recupération des données
            console.log(data);
          },
          err => {
            console.log(err);
          }
        );
    }else  if(dataForm["TYPE_PERSONNE"]== 'D'){
      this.donneursServices.saveDonneur(dataForm)
        .subscribe( data => {
            // recupération des données
            console.log(data);
          },
          err => {
            console.log(err);
          }
        );
    }else {
      console.log("no can save");
    }
    */
  }
}
