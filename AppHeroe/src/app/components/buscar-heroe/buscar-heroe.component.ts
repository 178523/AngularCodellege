import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router'; //Obtiene parametros
import { HeroeService } from '../../services/heroe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
  styles: []
})
export class BuscarHeroeComponent implements OnInit {
  private termino:string="";
  public heroesFiltrados:any={};
  public loading:boolean=true;

  constructor(private ActivateRoute:ActivatedRoute, private _heroeService:HeroeService,private router:Router) {
    
      this.ActivateRoute.params.subscribe((terminoURL)=>{
        this.loading=true;
        this.termino=terminoURL.termino;
        this.heroesFiltrados=this._heroeService.buscarHeroes(this.termino);
        this.loading=false;
      })
      
   
   }

   ngOnInit() {//se ejecuta cuando html y css se terminen de ejecutar
    this.heroesFiltrados=this._heroeService.ReturnHeroes();
    setTimeout(()=>{
      this.loading=false;
    },1000);
  } 

  public SendInformation(idHeroe){
    this.router.navigate(['heroeinformacion',idHeroe]);
}

}
