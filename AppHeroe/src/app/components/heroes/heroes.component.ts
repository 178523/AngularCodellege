import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  public HeroesRecibidos:Array<any>=[];

  public loading:boolean=true;

  

  constructor(private router:Router, public _HeroeService:HeroeService) { 
    
  }

  ngOnInit() {//se ejecuta cuando html y css se terminen de ejecutar
    this.HeroesRecibidos=this._HeroeService.ReturnHeroes();
    setTimeout(()=>{
      this.loading=false;
    },1000);
  } 

  public SendInformation(idHeroe){
    this.router.navigate(['heroeinformacion',idHeroe]);
}

}
