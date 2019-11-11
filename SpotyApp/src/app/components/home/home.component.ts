import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public NewReleases:Array<any>=[];

  constructor(private _spotifyServices:SpotifyService) { 
    this._spotifyServices.GetNewRelases().subscribe((releases:any)=>{
      this.NewReleases=releases.albums.items;
      // loading=false;
      console.log(this.NewReleases);
    })

    
    

  }

  ngOnInit() {
  }

}
