import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'myMapFilter', pure: false})

export class MapFilter implements PipeTransform {
  public transform(data: Object[], key) {
    return data.filter((el) => el[key]);
  }
}
