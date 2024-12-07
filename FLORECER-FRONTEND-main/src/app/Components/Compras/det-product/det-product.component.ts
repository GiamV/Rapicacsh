import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Models/Producto';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/Service/producto.service';
import { ComprasService } from 'src/app/Service/compras.service';
import { DetalleGuiaEntrada } from 'src/app/Models/DetalleGuiaEntrada';
import { GuiaEntrada } from 'src/app/Models/GuiaEntrada';
import swal from 'sweetalert2';
import { DetalleVenta } from 'src/app/Models/DetalleVenta';
import { CabeceraVenta } from 'src/app/Models/CabeceraVenta';

@Component({
  selector: 'app-det-product',
  templateUrl: './det-product.component.html',
  styleUrls: ['./det-product.component.css']
})
export class DetProductComponent implements OnInit {
  productos:Producto[]=[];
  producto:Producto = new Producto();
  detalles:  DetalleGuiaEntrada[]=[];
  public guia:GuiaEntrada = new GuiaEntrada()
  constructor(private router:Router, private productoService:ProductoService,private comprasService:ComprasService) { }

  conf: boolean=true;
  valor: string="EDITAR";


  cabecera: CabeceraVenta;

  clase=0
  detalleVentas:DetalleVenta[]
  
  ngOnInit(): void {
    //Obtenemos el ID Usuario
    this.listarDetalles()
    this.getCabeceras()
    this.comprasService.actualizarCant(this.detalles[0].idDetalleGuia,this.detalles[0]).subscribe(data=>{
      //this.detalleVentas=this.detalleVentas.filter(r=>r.idDetalleVenta!==item.idDetalleVenta);
      this.listarDetalles();
      this.getCabeceras();
    })
    //Obtenemos el Objeto Cabecera del Usuario
    
  }

  comprarGuia(){
    
    console.log(this.guia.idGuiaEntrada);
    console.log(this.guia);
    swal.fire(
      'SISTEMA DE COMPRAS',
      'Orden Generada Correctamente',
      'success'
    )
    this.router.navigate([`/cliente/cliente-pdf`]);
    
    // this.getCabeceras();
    // this.listarDetalles();
    
    
  }
  procesar(item : DetalleGuiaEntrada){
    if(this.conf==true){
      this.conf=false;
      this.valor="GUARDAR"
    }else{
      this.conf=true;
      this.comprasService.actualizarCant(item.idDetalleGuia,item).subscribe(data=>{
        //this.detalleVentas=this.detalleVentas.filter(r=>r.idDetalleVenta!==item.idDetalleVenta);
        this.listarDetalles();
        this.getCabeceras();
        this.valor="EDITAR"
      })
    }
    
  }

  eliminar(detalle:DetalleGuiaEntrada){
    this.comprasService.eliminarDetalle(detalle.idDetalleGuia).subscribe(data=>{
      this.listarDetalles()
    this.getCabeceras()
      
      
    })
  }

  listarDetalles(){
    let iduser=localStorage.getItem("iduser"); 
    console.log(iduser);
    this.comprasService.getDetalleCarCompra(+iduser!).subscribe(
      deta=>{
        this.detalles=deta;
        console.log(deta);
      }
    )
  }

  getCabeceras(){
    let iduser=localStorage.getItem("iduser"); 
    this.comprasService.getCabeceraXUser(+iduser!).subscribe(
      guia=>{
        this.guia=guia;
        console.log(guia);
      }
    )
  }

  

  
  

}
