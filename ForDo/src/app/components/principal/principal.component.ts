import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FordoService } from 'src/app/service/fordo.service';
import { contentThing, Thing } from '../../interfaces/thing.interface';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styles: []
})
export class PrincipalComponent implements OnInit {

  public Formulario:FormGroup;

  public Things:contentThing[];

  constructor(private _forDoServices:FordoService) { 
    this.ShowThings();
  }

  ngOnInit() {
    this.crearFormulario();
  }

  public crearFormulario(){
    this.Formulario=new FormGroup({
      thing: new FormControl(null,[Validators.required,Validators.minLength(5)])
    })

  }

  public ObtenerThing(){
console.log(this.Formulario.value);
this._forDoServices.PostThing(this.Formulario.value).subscribe((data)=>{console.log(data);})
}

public ShowThings(){
  this._forDoServices.GetThings().subscribe(
    (data:Thing)=>{
      this.Things=data.Things
    }
  )
}


}
