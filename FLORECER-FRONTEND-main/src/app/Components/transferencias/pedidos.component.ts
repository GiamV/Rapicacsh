import { Component, OnInit } from '@angular/core';
import { CabeceraVenta } from 'src/app/Models/CabeceraVenta';
import { DetalleVenta } from 'src/app/Models/DetalleVenta';
import { CarritoComprasService } from 'src/app/Service/carrito-compras.service';
import { LoginService } from 'src/app/Service/login.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/Models/Usuario';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  public user:Usuario= new Usuario();
  usuario: string = ''; // Variable para el input
  cabeceras:CabeceraVenta[]=[];
  detalles:DetalleVenta[]=[];
  constructor(private modal:NgbModal, private carritoService:CarritoComprasService, private loginService:LoginService) { }

  ngOnInit(): void {
    let idUser=localStorage.getItem("iduser");
    
  }

  buscarUsuario(){
    this.loginService.getUserbyUaser(this.usuario).subscribe(
      data=>{
        this.user=data;
        console.log(data);
      }
    );
  }
  openCentrado(contenido,CabeceraVenta:CabeceraVenta){
    this.modal.open(contenido,{centered:true});
    this.carritoService.listarDetUser(CabeceraVenta.idCabecera).subscribe(
      detalles=>{
        this.detalles=detalles;
        console.log(detalles);
      }
    );
    
  }

}
