import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/Models/Proveedor';
import { ProveedorService } from 'src/app/Service/proveedor.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  
  proveedores: Proveedor[]=[];
  constructor(private router:Router,private proveedorService:ProveedorService) { }

  ngOnInit(): void {
    this.proveedorService.getProveedor().subscribe(
      proveedores=>{
      this.proveedores=proveedores;
      console.log(proveedores);
      }
    );
  }
  pageChangeEvent(event: number){
    this.page_size = event;
    this.proveedorService.getProveedor().subscribe(
      proveedores=>{
      this.proveedores=proveedores;
      console.log(proveedores);
      }
    );
}
  handlePage(e:PageEvent){
    this.page_size=e.pageSize
    this.page_number=e.pageIndex+1
  }
  page_size:number = 3;
  page_number:number = 1;
  pageSizeOptions = [3,5,10,20]

  irProductos(id:number){
    console.log(id);
  }

  irManProvee(){
    this.router.navigate([`/cliente/cliente-listpro`]);
  }


}
