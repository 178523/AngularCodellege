import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { StoreService } from '../../services/store.services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-informacion-producto',
  templateUrl: './informacion-producto.component.html',
  styleUrls: ['./informacion-producto.component.css']
})
export class InformacionProductoComponent implements OnInit {

  public ProductoFiltrado:any={};
  public loading:boolean=true;

  constructor(private ActivatedRouter:ActivatedRoute,private _StoreService:StoreService,private router:Router) { 
    const IdStoreURL= this.ActivatedRouter.snapshot.paramMap.get('id');
    this.ProductoFiltrado=this._StoreService.BuscarProducto(IdStoreURL);
  }
  public StoreHome(){
    this.router.navigate(['store']);
}
  ngOnInit() {
  }

}
