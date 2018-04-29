import { Pipe, PipeTransform } from '@angular/core';
import * as distanceInWordsToNow from 'date-fns/distance_in_words_to_now'; //pour faire genre il ya un jour ect
import * as frlocale from 'date-fns/locale/fr'; //pour faire genre il ya un jour  mais en Français
@Pipe({
  name: 'dayAgo'
})
export class DayAgoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return distanceInWordsToNow(new Date(value), {locale: frlocale});
  }

}
