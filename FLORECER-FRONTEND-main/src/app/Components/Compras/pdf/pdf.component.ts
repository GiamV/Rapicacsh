import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Router } from '@angular/router';

import { ProductoService } from 'src/app/Service/producto.service';
import { ComprasService } from 'src/app/Service/compras.service';
import { DetalleGuiaEntrada } from 'src/app/Models/DetalleGuiaEntrada';
import { GuiaEntrada } from 'src/app/Models/GuiaEntrada';
import swal from 'sweetalert2';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  detalles:  DetalleGuiaEntrada[]=[];
  public guia:GuiaEntrada = new GuiaEntrada()

  constructor(private router:Router, private productoService:ProductoService,private comprasService:ComprasService) { }

  ngOnInit(): void {
    this.listarDetalles()
    this.getCabeceras()
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
  downloadPDF() {
    this.comprasService.venderCab(this.guia.idGuiaEntrada,this.guia).subscribe(dasd=>{

    })
    // Extraemos el
    const DATA = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3,
    };
    html2canvas(DATA, options)
      .then((canvas) => {
        const img = canvas.toDataURL('image/PNG');

        // Add image Canvas to PDF
        const bufferX = 15;
        const bufferY = 15;
        const imgProps = (doc as any).getImageProperties(img);
        const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        doc.addImage(
          img,
          'PNG',
          bufferX,
          bufferY,
          pdfWidth,
          pdfHeight,
          undefined,
          'FAST'
        );
        return doc;
      })
      .then((docResult) => {
        docResult.save(`${new Date().toISOString()}guiaentrada.pdf`);
      });
  }
  irProveedores() {
    this.router.navigate([`/cliente/cliente-listpro`]);
  }

}
