import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { StoreService } from '../../services/store.services';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public ProductosRecibidos:Array<any>=[];

  public loading:boolean=true;

  constructor(public _StoreService:StoreService,private router:Router) { }

  public getWidth(valor){
    let porcentaje=(valor*100)/5;
    return `${porcentaje}%`;
  }

  public SendInformation(idProducto){
    this.router.navigate(['informacionProducto',idProducto]);
}
  ngOnInit() {
    this.ProductosRecibidos=this._StoreService.ReturnProducts();
    setTimeout(()=>{
      this.loading=false;
    },1000);
  }

}
