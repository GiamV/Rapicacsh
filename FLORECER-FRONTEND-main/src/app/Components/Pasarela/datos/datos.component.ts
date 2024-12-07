import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Models/Usuario';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  dolares: number;
  progreso: number;
  public user:Usuario = new Usuario();
  username:string;
  monto:number;
  constructor(private router:Router,private loginService:LoginService) { }

  ngOnInit(): void {
    this.monto=Number (localStorage.getItem("monto"));
    console.log(this.monto)
    this.username=localStorage.getItem("user"); 
    this.loginService.getUserbyUaser(this.username)
    .subscribe(data=>{
      this.user=data;})
  }

  irEnvio(){ 
    this.router.navigate(["envio"]);
  }

}
