import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drieccion } from 'src/app/Models/Direccion';
import swal from 'sweetalert2';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent implements OnInit {

  monto:number;
  direccion:String;
  distrito:string;
  nrodom:string;
  ref:string
  public direc:Drieccion = new Drieccion()
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.monto=Number (localStorage.getItem("monto"));
  }
  
  irPagos(){
    this.direccion=this.direc.direccion;
    this.distrito=this.direc.distrito;
    this.nrodom=this.direc.nrodom;
    this.ref=this.direc.ref;
    console.log(this.direccion)
    if(this.direccion==undefined || this.direccion.trim()==""){
      swal.fire(
        'Campo Direccion',
        'Asegurece de rellenar todos los campos',
        'info'
      )
    }else if(this.distrito==undefined || this.distrito.trim()=="") {
      swal.fire(
        'Campo Distrito',
        'Asegurece de rellenar todos los campos correctamente',
        'info'
      )
    }
    else if(this.nrodom==undefined || this.nrodom.trim()=="") {
      swal.fire(
        'Campo Nuemedo de Domicilio',
        'Asegurece de rellenar todos los campos correctamente',
        'info'
      )
    }
    else if(this.ref==undefined || this.ref.trim()=="") {
      swal.fire(
        'Campo Referencia',
        'Asegurece de rellenar todos los campos correctamente',
        'info'
      )
    }else {
      window.location.href = 'pagos';
      console.log(this.direc)
      localStorage.setItem('direc', JSON.stringify(this.direc));
    }
    
  }


}
