import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(value: any): any {
    if(value=="null" || value==null){
      return "../../assets/images/found.gif"
    }
    return value;
  }

}
