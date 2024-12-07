import { Component, OnInit } from '@angular/core';
import { DetalleGuiaEntrada } from 'src/app/Models/DetalleGuiaEntrada';
import { GuiaEntrada } from 'src/app/Models/GuiaEntrada';
import { ComprasService } from 'src/app/Service/compras.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
@Component({
  selector: 'app-list-compras',
  templateUrl: './list-compras.component.html',
  styleUrls: ['./list-compras.component.css']
})
export class ListComprasComponent implements OnInit {

  guiasEntrada:GuiaEntrada[]=[];
  detalleguia:DetalleGuiaEntrada[]=[];
  guia:GuiaEntrada = new GuiaEntrada();

  constructor(private modal:NgbModal,private comprasService:ComprasService) { }

  ngOnInit(): void {
    this.comprasService.getCabecerasPend().subscribe(
      guias=>{
        this.guiasEntrada=guias;
        console.log(this.guiasEntrada);

      }
    )
  }
  openCentrado(contenido,Cabecera:GuiaEntrada){
    this.modal.open(contenido,{centered:true,size:'xl'});
    this.comprasService.getDetallePen(Cabecera.idGuiaEntrada).subscribe(
      detallesGuia=>{
        this.detalleguia=detallesGuia;
        console.log(this.detalleguia);
      }
    )
  }

  AccionCompra(idguia:number,estado:number,guia:GuiaEntrada){
    swal.fire({
      title: '¿Estas Seguro?',
      text: "No podras cambiarlo despues",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.comprasService.OrdenHecha(idguia,estado,guia).subscribe(
          data=>{
            this.comprasService.getCabecerasPend().subscribe(
              guias=>{
                this.guiasEntrada=guias;
                console.log(this.guiasEntrada);
        
              }
            )
          }
        )
        swal.fire(
          'Confirmado',
          'Se guardo con Exito',
          'success'
        )
      }
    })
    
  }

}
