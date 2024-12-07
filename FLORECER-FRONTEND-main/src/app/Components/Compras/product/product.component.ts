import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleProveedor } from 'src/app/Models/DetalleProveedor';
import { Producto } from 'src/app/Models/Producto';
import { DetalleGuiaEntrada } from 'src/app/Models/DetalleGuiaEntrada';
import { ProveedorService } from 'src/app/Service/proveedor.service';
import { LoginService } from 'src/app/Service/login.service';
import { ComprasService } from 'src/app/Service/compras.service';
import { GuiaEntrada } from 'src/app/Models/GuiaEntrada';
import { Proveedor } from 'src/app/Models/Proveedor';
import swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  urlTree: any;
  id: any;
  cat:String
  detalle:DetalleGuiaEntrada=new DetalleGuiaEntrada();

  constructor(private rutaActiva: ActivatedRoute,private router:Router,private proveedorService:ProveedorService,
    private loginService:LoginService, private comprasService:ComprasService) {
    console.log(this.rutaActiva.snapshot.paramMap.get('id'));
    this.id=this.rutaActiva.snapshot.paramMap.get('id');
   }
   productos:  DetalleProveedor[]=[];
  public producto:Producto = new Producto()
  public guia:GuiaEntrada = new GuiaEntrada()
  public proveedor:Proveedor = new Proveedor()
  
  
  ngOnInit(): void {
    //Obtenemos el ID Usuario
    let iduser=localStorage.getItem("iduser"); 
    console.log(iduser);

    //Obtenemos el Objeto Cabecera del Usuario
    this.comprasService.getCabeceraXUser(+iduser!).subscribe(
      guia=>{
        this.guia=guia;
        console.log(guia);
      }
    )

    //Obtenemos el Objeto Proveedor del Producto
    this.proveedorService.getProveedorId(this.id).subscribe(
      proveedor=>{
        this.proveedor=proveedor;
        console.log(proveedor);
      }
    );


    this.proveedorService.getProveedoresID(this.id).subscribe(
      productos=>{
        this.productos=productos;
        console.log(productos);
      }
    );
    
  }
  ObtenerInfo(producto:Producto):void{
    localStorage.setItem("codPro",producto.idProducto.toString());
    this.router.navigate([`/cliente/cliente-detpro`]);
    console.log(producto);
  }

  AgregarAlaCompra(detalleGuia:DetalleGuiaEntrada,producto:Producto){

    detalleGuia.cantidad=1;
    detalleGuia.proveedor=this.proveedor;
    
    if(this.loginService.isLoggedIn()){
      console.log("Primera Validacion")
      if(detalleGuia.cantidad==undefined){
            //this.mensaje="Seleccione una cantidad"
            console.log("Segunda Validacion")
          }else{
            console.log("entro Validacion")
            //this.mensaje=""
            this.comprasService.getDetalleCarCompra(this.guia.usuario.idUsuario).subscribe(data=>{
              let encontro=0;
              for(let de of data){
                console.log(de);
                  if(de.producto.idProducto==producto.idProducto){
                    encontro=1;
                    console.log("Encontro Producto Igual")
                    de.cantidad= this.detalle.cantidad+de.cantidad;
                    console.log(de.cantidad);
                    this.comprasService.actualizarCant(de.idDetalleGuia,de).subscribe(detalleup=>{
                    console.log("Detalle up")
                    //this.mensaje="Se agregó con éxito"
                    })
                    console.log("Rompe");
                    break;
                  }
              }
              
              if(encontro==0){
                    this.detalle.producto=producto;
                    this.detalle.precio=producto.precioCompra;
                    this.detalle.guia_Entrada=this.guia;
                    console.log(detalleGuia);
                    console.log(this.detalle);
                    this.comprasService.createDetalle(detalleGuia)
                      .subscribe(data=>{
                        console.log(data.guia_Entrada);
                        this.comprasService.actualizarCant(data.idDetalleGuia,data).subscribe(detalleup=>{
                          console.log("Creado con Exito")
                          //this.mensaje="Se agregó con éxito"
                          })
                      // alert("Se Agrego Con exito");
                      //this.mensaje="Se agregó con éxito"
                      })
                    
              }
              })

          }
      
    }else{
      swal.fire({
        icon: 'info',
        title: 'Ups...',
        text: 'Logueate o Registrate para Comenzar',
      })
      this.router.navigate(["/login"])
      console.log("Ingresa o Registrate")
    }

  }
  irCarritoGuia(){
    this.router.navigate(["/cliente/cliente-detpro"])
  }


}
