import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/Models/Rol';
import { Usuario } from 'src/app/Models/Usuario';
import { CarritoComprasService } from 'src/app/Service/carrito-compras.service';
import swal from 'sweetalert2';

import { LoginService } from 'src/app/Service/login.service';
import { RolService } from 'src/app/Service/rol.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listar-user',
  templateUrl: './listar-user.component.html',
  styleUrls: ['./listar-user.component.css']
})
export class ListarUserComponent implements OnInit {

  roles: Rol[]=[];
  public usuario:Usuario = new Usuario()
  public usuarioselect:Usuario = new Usuario()
  usuarios:Usuario[]=[];
  constructor(private modal:NgbModal,private loginService:LoginService,private rolService:RolService,
              private carrito:CarritoComprasService) { }

  ngOnInit(): void {
    this.rolService.getRoles().subscribe(
      roles=>{
        this.roles=roles;
      }
    );

    this.loginService.getUsers().subscribe(
      usuarios=>{
        this.usuarios=usuarios;
        console.log(usuarios);
      }
    );
  }

  Registrar(user:Usuario){
    user.estado=1;

    this.loginService.createUser(user)
    .subscribe(data=>{
      console.log(data.idUsuario)
      if(data.rol.rol=="Cliente"){
        this.carrito.addCabCarrito(data.idUsuario).subscribe(d=>{
          this.loginService.getUsers().subscribe(
            usuarios=>{
              this.usuarios=usuarios;
              console.log(usuarios);
            }
          );
        })
        
      }
      swal.fire({
        icon: 'success',
        title: 'Usuario Creado con Exito',
        text: 'Gracias por la Preferencia',
        footer: '<a href="/index">Ir al Inicio</a>'
      })
      
      
    })
  }

  openCentrado(contenido,user){
    this.modal.open(contenido,{centered:true, size:'lg'});
    this.loginService.getUserId(user.idUsuario)
    .subscribe(data=>{
      this.usuarioselect=data
      console.log(this.usuarioselect);
    })
  }

}
