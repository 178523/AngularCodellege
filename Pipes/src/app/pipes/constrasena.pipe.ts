import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'constrasena'
})
export class ConstrasenaPipe implements PipeTransform {

  transform(value: string, activar:boolean): string {
    if(activar){
      let salida:string="";
      for(let i=0;i<value.length;i++){
        salida+="■";
      }
      return salida;
    }else{
      return value;
    }
  }

}
