import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Models/Categoria';
import { DetalleProveedor } from 'src/app/Models/DetalleProveedor';
import { Producto } from 'src/app/Models/Producto';
import { Proveedor } from 'src/app/Models/Proveedor';
import { CategoriaService } from 'src/app/Service/categoria.service';
import { DetalleproveService } from 'src/app/Service/detalleprove.service';
import { ProductoService } from 'src/app/Service/producto.service';
import { ProveedorService } from 'src/app/Service/proveedor.service';
import swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-pro',
  templateUrl: './add-pro.component.html',
  styleUrls: ['./add-pro.component.css']
})
export class AddProComponent implements OnInit {

  public producto:Producto = new Producto()
  public productoregistrado:Producto = new Producto()
  public detapro:DetalleProveedor = new DetalleProveedor()
  proveedores: Proveedor[]=[];

  constructor(private modal:NgbModal, private proveedorService:ProveedorService,private router:Router, private productoService:ProductoService, private categoriaService:CategoriaService,
    private detalleproveService:DetalleproveService) { }

  categorias: Categoria[]=[];
  ngOnInit(): void {
    this.listarProveedor()
    this.categoriaService.getCategorias().subscribe(
      categorias=>{
      this.categorias=categorias;
      }
    );
  }
  GuardarProducto(producto:Producto){
    
  }
  GuardarDetallePro(detapro:DetalleProveedor){
    detapro.estado=1;
    detapro.producto=this.productoregistrado;
    this.detalleproveService.createDetalleProve(detapro).subscribe(
      data=>{
        swal.fire(
          'Agregado con Exito',
          'Producto Registrado',
          'success'
        )
        this.router.navigate(["cliente/cliente-producto"])
        
      }
    )
    
  }

  listarProveedor(){
    this.proveedorService.getProveedor().subscribe(
      proveedores=>{
        this.proveedores=proveedores
      }
    )
  }

  openCentrado(contenido,producto){
    this.modal.open(contenido,{centered:true});
    this.productoService.createProducto(producto)
    .subscribe(data=>{
      this.productoregistrado=data
    })
  }

  


}
