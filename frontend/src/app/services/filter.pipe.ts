import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tasks: any, inputString: any): any {
    // Check if the search inputString is empty/undefined
    if(inputString === undefined){
      return tasks;
    }
    // If there is input string to search:
    return tasks.filter(function(retVal){
      return retVal.name.toLowerCase().includes(inputString.toLowerCase());
    }); 
  }

}
