import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public Mostrar:boolean=false;

  public Frase: any={
    mensaje:'"Un gran poder conlleva una gran responsabilidad"',
    autor: ' Anónimo'
  };

  public Personajes:string[]=['Spiderman','Venom','Dr. Octopus'];

  constructor() { }

  ngOnInit() {
  }

  public MetodoCambiar(){
    this.Mostrar=!this.Mostrar;
    console.log(this.Mostrar);
  }

}
