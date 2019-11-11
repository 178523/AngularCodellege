import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  private headers:HttpHeaders= new HttpHeaders({
    'Authorization':'Bearer BQAZtFozTIGVaPxr-L07Jp1DVPECl2-jr7NUHKaHbaW3f1KH-xddJRMwU31BLvLnB3_JVEXgbzuKte44kcY'
  });

  private URL:string='https://api.spotify.com/v1';

  public GetNewRelases(){
    return this.http.get(`${this.URL}/browse/new-releases?country=MX&limit=10`,{headers:this.headers});
  }

  public searchdata(termino,type){
    termino=encodeURI(termino);
    let urlSend:string=`${this.URL}/search?q=${termino}&type=${type}&market=MX&limit=9`;
    return this.http.get(urlSend,{headers:this.headers});
  }

  GetTopTrackArtist(idArtist){
    let urlSend=`${this.URL}/artists/${idArtist}/top-tracks?country=MX`;
    return this.http.get(urlSend,{headers:this.headers});
  }

  public getArtist(idArtist){
    let urlSend=`${this.URL}/artists/${idArtist}`;
    return this.http.get(urlSend,{headers:this.headers});
  }

  
}
