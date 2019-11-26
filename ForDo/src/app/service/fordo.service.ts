import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FordoService {

  private UrlGlobal='http://10.2.47.26:5000';//Agregar ip de algún compañero
  

  constructor(private http:HttpClient) {}

  public PostThing(thing){ 
    let url=`${this.UrlGlobal}/v1/things`;
    console.log(url);
    
  return  this.http.post(url,thing);

  }

  public GetThings():Observable<object>{
    let url=`${this.UrlGlobal}/v1/things`;
    return this.http.get(url);
  }

  
 

}
