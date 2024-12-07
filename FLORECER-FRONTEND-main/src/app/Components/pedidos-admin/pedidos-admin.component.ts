import { Component, OnInit } from '@angular/core';
import { CabeceraVenta } from 'src/app/Models/CabeceraVenta';
import { DetalleVenta } from 'src/app/Models/DetalleVenta';
import { Usuario } from 'src/app/Models/Usuario';
import { CarritoComprasService } from 'src/app/Service/carrito-compras.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pedidos-admin',
  templateUrl: './pedidos-admin.component.html',
  styleUrls: ['./pedidos-admin.component.css']
})
export class PedidosAdminComponent implements OnInit {

  public user:Usuario = new Usuario();
  cabeceras:CabeceraVenta[]=[];
  detalles:DetalleVenta[]=[];
  constructor(private modal:NgbModal, private carritoService:CarritoComprasService) { }
  isChecked: boolean = false;
  isChecked2: boolean = false;
  ngOnInit(): void {
    this.carritoService.findAll().subscribe(
      cabeceras=>{
        this.cabeceras=cabeceras;
        console.log(cabeceras);
      }
    );
  }

  VerDetalles(CabeceraVenta:CabeceraVenta,user:Usuario){
    this.user=user;
    this.carritoService.listarDetUser(CabeceraVenta.idCabecera).subscribe(
      detalles=>{
        this.detalles=detalles;
        console.log(detalles);
      }
    );
  }
  openCentrado(contenido,CabeceraVenta:CabeceraVenta,user:Usuario){
    this.modal.open(contenido,{centered:true});
    this.user=user;
    this.carritoService.listarDetUser(CabeceraVenta.idCabecera).subscribe(
      detalles=>{
        this.detalles=detalles;
        console.log(detalles);
      }
    );
  }
  onCheckboxChange() {
    
    setTimeout(() => {
      console.log(this.isChecked );
    console.log(this.isChecked2 );
      if (this.isChecked==true && this.isChecked2==true) {
        this.carritoService.findAll().subscribe(
          cabeceras=>{
            this.cabeceras=cabeceras;
            console.log(cabeceras);
          }
        );
        console.log("1");
      } else if (this.isChecked==false && this.isChecked2==false) {
        this.carritoService.findAll().subscribe(
          cabeceras=>{
            this.cabeceras=cabeceras;
            console.log(cabeceras);
          }
        );
        console.log("2");
      }if (this.isChecked==true && this.isChecked2==false) {
        this.carritoService.listarCabTodosP().subscribe(
          cabeceras=>{
            this.cabeceras=cabeceras;
            console.log(cabeceras);
          }
        );
        console.log("3");
      }if (this.isChecked==false && this.isChecked2==true) {
        this.carritoService.listarCabTodos().subscribe(
          cabeceras=>{
            this.cabeceras=cabeceras;
            console.log(cabeceras);
          }
        );
        console.log("4");
      }
    });
  }

  ActualizarTipo(id:number,cab:CabeceraVenta){
    this.carritoService.actualizarTipo(id,cab).subscribe(
      cabecera=>{
        this.carritoService.listarCabTodosFull().subscribe(
          cabeceras=>{
            this.cabeceras=cabeceras;
            console.log(cabeceras);
          }
        );
      }
    );
  }
  

}
