import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'myMapToIterable'})

export class MapToIterable implements PipeTransform {
  public transform(value) {
    if (!value) {
      return;
    }
    let result = [];
    let key;
    for (key in value) {
      if (value.hasOwnProperty(key)) {
        result.push({key, value: value[key]});
      }
    }
    return result;
  }
}
