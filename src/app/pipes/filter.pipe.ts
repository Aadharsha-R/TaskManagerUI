import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any): any {
if(value!==undefined&&value!==null)
{
return _.uniqBy(value,'TaskName')

}
    return value;
  
      }
  }


