import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-trajet-details',
  templateUrl: './trajet-details.component.html',
  styleUrls: ['./trajet-details.component.css'],
})
export class TrajetDetailsComponent implements OnInit {
  private sub: any;
  idTrajet: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.idTrajet = params['idTrajet']; // (+) converts string 'id' to a number


    });
  }

}
