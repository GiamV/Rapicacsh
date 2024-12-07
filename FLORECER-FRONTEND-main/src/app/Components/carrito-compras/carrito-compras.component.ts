// import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CabeceraVenta } from 'src/app/Models/CabeceraVenta';
//import { DOCUMENT } from '@angular/platform-browser';
import { DetalleVenta } from 'src/app/Models/DetalleVenta';
import { CarritoComprasService } from 'src/app/Service/carrito-compras.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {
  
  conf: boolean=true;
  valor: string="EDITAR";
  cont:number=0

  cabecera: CabeceraVenta;

  clase=0
  detalleVentas:DetalleVenta[]

  constructor(private detalleService:CarritoComprasService) {
   }

  ngOnInit(): void {
    
    this.listarDetalles();
    this.getCabeceras();
    this.detalleService.actualizarCant(this.detalleVentas[0].idDetalleVenta,this.detalleVentas[0]).subscribe(data=>{
      //this.detalleVentas=this.detalleVentas.filter(r=>r.idDetalleVenta!==item.idDetalleVenta);
      this.listarDetalles();
      this.getCabeceras();
    })
  }

  listarDetalles(){
    let idUser=localStorage.getItem("iduser");
    this.detalleService.listarDetalles(Number(idUser))
    .subscribe(data=>{
        this.detalleVentas=data;
        this.cont=this.detalleVentas.length;
        console.log(this.cont)
      }
    )
  }
  //localStorage
  procesar(item : DetalleVenta){
    if(this.conf==true){
      this.conf=false;
      this.valor="GUARDAR"
    }else{
      if(item.cantidad< 0){
        swal.fire(
          'Cantidad debe ser mayor a 0',
          'Asegurece de elegir la cantidad correcta',
          'info'
        )
      }else if(item.cantidad==0){
        this.eliminar(item.idDetalleVenta)
      }else{
        this.conf=true;
      this.detalleService.actualizarCant(item.idDetalleVenta,item).subscribe(data=>{
        //this.detalleVentas=this.detalleVentas.filter(r=>r.idDetalleVenta!==item.idDetalleVenta);
        this.listarDetalles();
        this.getCabeceras();
        this.valor="EDITAR"
      })
      }
      
    }
    
  }

  eliminar(id:number){
    this.detalleService.eliminarCarrito(id).subscribe(data=>{
      this.listarDetalles();
      this.getCabeceras();
    })
  }

  getCabeceras(){
    let idUser=localStorage.getItem("iduser");
    this.detalleService.getCabecera(Number(idUser)).subscribe(cabecera=>{
      this.cabecera=cabecera
    })
  }

  comprar(){
    this.detalleService.venderCab(this.cabecera.idCabecera,this.cabecera).subscribe(dasd=>{

    })
    console.log(this.cabecera.idCabecera);
    console.log(this.cabecera);
    swal.fire(
      'Compra Exitosa',
      'Gracias por su Preferencia',
      'success'
    )
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      window.location.reload();
    }, 1000);
    
    
    // this.getCabeceras();
    // this.listarDetalles();
  }
  irPasarela(){
    if(this.detalleVentas.length==0){
      
    }else {
      localStorage.setItem("monto",String(this.cabecera.neto) );
    window.location.href="datos";
    }
    
  }

}
