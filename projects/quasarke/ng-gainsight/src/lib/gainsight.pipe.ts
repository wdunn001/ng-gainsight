import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gainsight'
})
export class GainSightPipe implements PipeTransform {

  transform(value: string, featurePath: string): string {
    return `gpx-${featurePath ? featurePath + '-' : ''}${value.replace(/\s/g, '').toLowerCase()}`;
  }

}
