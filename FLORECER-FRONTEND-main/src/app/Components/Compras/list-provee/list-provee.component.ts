import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/Models/Proveedor';
import  { ProveedorService } from 'src/app/Service/proveedor.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-list-provee',
  templateUrl: './list-provee.component.html',
  styleUrls: ['./list-provee.component.css']
})
export class ListProveeComponent implements OnInit {


  public proveedor:Proveedor = new Proveedor()
  constructor(private proveedorService:ProveedorService,private router:Router) { }
  proveedores: Proveedor[]=[];
  ngOnInit(): void {
    this.proveedorService.getProveedor().subscribe(
      proveedores=>{
        this.proveedores=proveedores
      }
    )
  }

  irCrearProbveedor(){ 
    this.router.navigate([`/cliente/cliente-addpro`]);
  }

  Delete(proveedor:Proveedor){
    this.proveedorService.deleteProveedorEstado(proveedor)
    .subscribe(data=>{
      this.proveedorService.getProveedor().subscribe(
        proveedores=>{
          this.proveedores=proveedores
        }
      );
    })
  }

  Editar(proveedor:Proveedor){
    this.proveedorService.getProveedorId(proveedor.idProveedor)
    .subscribe(data=>{
      this.proveedor=data;
    })
  }

  ActualizarProveedor(proveedor:Proveedor){
    this.proveedorService.updateProvee(proveedor)
    .subscribe(data=>{
      this.proveedor=data;
      swal.fire(
        'Actualizado con Exito',
        'Proveedor Actualizado',
        'success'
      )
      this.proveedorService.getProveedor().subscribe(
        proveedores=>{
          this.proveedores=proveedores
        }
      )
    })
  }

}
