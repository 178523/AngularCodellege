import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Subscriber } from 'rxjs';
import { debounceTime } from 'rxjs/operators'; 
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  public searchFilter:Array<string>=['track','artist'];

  public searchResults:any=[];


  constructor(private _spotifyServices:SpotifyService, private router:Router) { }

  ngOnInit() {
  }

  search(type,termino){
    
    if(type=='null'||termino==''||termino==" ")return

    
      this._spotifyServices.searchdata(termino,type).subscribe((data:any)=>{
        console.log(data)

          if(data.tracks){
            this.searchResults=data.tracks.items;
          }else{
            this.searchResults=data.artists.items;
          }

          console.log(this.searchResults);
      });
    
    
    
    console.log(type,termino)
  }

  public GotoArtist(artistId){
    this.router.navigate(['/artist',artistId]);
    console.log(artistId)
  }

}
