import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  public idArtist:string="";
  public Artist:any;
  public topTracks:any;

  constructor(private _spotifyServices:SpotifyService, private activatedRoute:ActivatedRoute) {
    this.idArtist=this.activatedRoute.snapshot.paramMap.get('id');
    this._spotifyServices.GetTopTrackArtist(this.idArtist).subscribe((data:any)=>{
      this.topTracks=data.tracks;
      this._spotifyServices.getArtist(this.idArtist).subscribe((data)=>{
        this.Artist=data;
      });
    });

    
    
   }

  ngOnInit() {
  }

}
