import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Nombre:string="José Pablo Jiménez Prado";
  public Array:Array<number>=[1,2,3,4,5,6,7,8,9,10];
  public pi:number=Math.PI;
  public porcentaje:number=0.245;
  public salario:number=12345.5;
  public fecha=new Date();
  public persona={
    nombre:'Pablo',
    apellido:'Jiménez',
    edad:'24',
    direccion:{
      calle:'Madero',
      numero:'1155',
      cp:'2000'
    }
  }

  public Activar:boolean=false;


  public nombre2:string='JoSé PaBlO jImËnEz PrAdO';

  public video:string="AQu-JgmtWAg";
 
}
