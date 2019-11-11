import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroeService } from '../../services/heroe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroeinformacion',
  templateUrl: './heroeinformacion.component.html',
  styleUrls: ['./heroeinformacion.component.css']
})
export class HeroeinformacionComponent implements OnInit {

  public HeroeFiltrado:any={};
  public loading:boolean=true;

  constructor(private ActivatedRouter:ActivatedRoute,private _HeroeService:HeroeService,private router:Router) { 
   const IdHeroeURL= this.ActivatedRouter.snapshot.paramMap.get('id');
   this.HeroeFiltrado=this._HeroeService.BuscarHeroe(IdHeroeURL);
   console.log(this.HeroeFiltrado)

  }

  ngOnInit() {//se ejecuta cuando html y css se terminen de ejecutar
    
  } 

  public HeroesHome(){
    this.router.navigate(['heroes']);
}

}
