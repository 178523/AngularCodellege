import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser'

@Pipe({
  name: 'domSanatizer'
})
export class DomSanatizerPipe implements PipeTransform {

  constructor(private _domSanitizer:DomSanitizer){

  }
  transform(value: any, url:string): any {
    console.log(value);
    console.log(url);
    let urlCreada= url+value;
    return this._domSanitizer.bypassSecurityTrustResourceUrl(urlCreada);
  }

}