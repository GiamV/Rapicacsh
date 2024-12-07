import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/Models/Proveedor';
import { ProveedorService } from 'src/app/Service/proveedor.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-add-provee',
  templateUrl: './add-provee.component.html',
  styleUrls: ['./add-provee.component.css']
})
export class AddProveeComponent implements OnInit {

  public proveedor:Proveedor = new Proveedor()

  constructor(private router:Router, private ProveedorService:ProveedorService) { }

  ngOnInit(): void {

  }

  GuardarProveedor(proveedor:Proveedor){
    proveedor.estado=1;
    this.ProveedorService.createProveedores(proveedor)
    .subscribe(data=>{
      swal.fire(
        'Agregado con Exito',
        'Proveedor Registrado',
        'success'
      )
      this.router.navigate(["/cliente/cliente-listpro"])
    })
    
  }

  

}
