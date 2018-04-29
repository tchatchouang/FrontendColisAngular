import { Component } from '@angular/core';

import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import { ViewChild, ElementRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 // @ViewChild('search') public searchElement: ElementRef;
  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {}


  ngOnInit() {
   /* this.mapsAPILoader.load().then(
      () => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types:["geocode"] });

        console.log('autocomplete :' + autocomplete.getPlace());
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            console.log('adr_address :' + place.adr_address);
            console.log('jjj :' + place.types[ "postal_code" ]);
            console.log('formatted_address :' + place.formatted_address);
            if(place.geometry === undefined || place.geometry === null ){
              return;
            }
          });
        });
      }
    );*/
  }
}
