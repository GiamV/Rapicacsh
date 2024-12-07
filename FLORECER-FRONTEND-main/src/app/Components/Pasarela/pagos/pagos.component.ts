import { Component, Directive, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/Service/login.service';
import { CargajsService } from 'src/app/Service/cargajs.service';
declare var paypal;
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { DolarService } from '../dolar.service';
import { CarritoComprasService } from 'src/app/Service/carrito-compras.service';
import { CabeceraVenta } from 'src/app/Models/CabeceraVenta';

import swal from 'sweetalert2';
import { Drieccion } from 'src/app/Models/Direccion';
@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css'],
})
export class PagosComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  monto:number;
  dolares: number;
  montodo:number;
  cabecera: CabeceraVenta;
  correo:string;

  numtarjeta:string;
  nom:string;
  mes:string;
  year:string;
  ccv:string;
  public direc:Drieccion = new Drieccion()
  constructor(private dolarService:DolarService,private router:Router,private loginService: LoginService, 
    private CargarJS: CargajsService,private modal:NgbModal,private detalleService:CarritoComprasService) {
    CargarJS.cargar(["js/file"])
  }


  ngOnInit(): void {
    var direccion = localStorage.getItem('direc');
    this.direc= JSON.parse(direccion);
  console.log('Direccion: ', JSON.parse(direccion));
  
    this.monto=Number (localStorage.getItem("monto"));
    this.convertir(this.monto);
    let collapsibles = document.querySelectorAll('.faq-container');
    collapsibles.forEach((element) => {
      element.addEventListener('click', () => {
        element.querySelector('.faq-answer').classList.toggle('open');
        element.querySelector('.question').classList.toggle('active');
        element.querySelector('.arrow-container').classList.toggle('up');
      });
    });


    swal.fire({
      title: 'Quiere recibir un correo',
      text: "Se enviara los detalles de su compra",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, acepto'
    }).then((result) => {
      if (result.isConfirmed) {
        swal.fire({
          title: 'Digite su correo',
          input: 'text',
          inputAttributes: {
            autocapitalize: 'off'
          },
          showCancelButton: true,
          confirmButtonText: 'Look up',
          showLoaderOnConfirm: true,
        }).then((result) => {
          if (result.isConfirmed) {
            this.correo=result.value;
            console.log(this.correo)
            localStorage.setItem("correo",this.correo);
            swal.fire({
              icon: 'success',
              title: `Correo registrado: ${result.value}`,
              
            })
          }
        })
      }else{
        this.correo="giam24villa@gmail.com"
      }
    })




    
    paypal
      .Buttons({
        funding: {
          disallowed: [paypal.FUNDING.CARD]
        },
        style: {  
          layout: 'horizontal',
          color: 'blue',
          shape: 'pill',
          label: 'pay',
        },
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: this.montodo
                },
              },
            ],
          });
        },
        onApprove: function (data, actions) {
          actions.order.capture().then(function (detalles) {
            window.location.href = 'validar';
          });
        },
        onCancel: function (data) {},
      })
      .render(this.paypalElement.nativeElement);
      
  }

  openTarjeta(contenido){
    this.modal.open(contenido,{centered:true,size:'xl'});
  }

  convertir(monto:number){
    console.log("Cambia")
    this.dolarService.getConvertir(monto).subscribe(
      (data:any)=>{ 
        this.dolares= data.result
        console.log(Math.round(this.dolares*100)/100);
        this.montodo=Math.round(this.dolares*100)/100
        
      }
    )
  }
  getCabeceras(){
    let idUser=localStorage.getItem("iduser");
    this.detalleService.getCabecera(Number(idUser)).subscribe(cabecera=>{
      this.cabecera=cabecera
    })
  }

  validarTarjeta(numeroTarjeta: string)  {

    if(numeroTarjeta==undefined || numeroTarjeta.trim()==""){ 
      swal.fire(
        'Campos Incompletos',
        'Asegurece de rellenar todos los campos',
        'info'
      )
    }else if(numeroTarjeta.length!=19){ 
      swal.fire(
        'Campos Incompletos',
        'Asegurece de rellenar todos los campos',
        'info'
      )
    }else if(this.nom==undefined || this.nom.trim()==""){ 
      swal.fire(
        'Campos Incompletos',
        'Asegurece de rellenar todos los campos',
        'info'
      )
    }else if(this.mes==undefined || this.mes.trim()==""){ 
      swal.fire(
        'Campos Incompletos',
        'Asegurece de rellenar todos los campos',
        'info'
      )
    }else if(this.year==undefined || this.year.trim()==""){ 
      swal.fire(
        'Campos Incompletos',
        'Asegurece de rellenar todos los campos',
        'info'
      )
    }else if(this.ccv==undefined || this.ccv.trim()==""){ 
      swal.fire(
        'Campos Incompletos',
        'Asegurece de rellenar todos los campos',
        'info'
      )
    }else if(this.ccv.length!=3){ 
      swal.fire(
        'Campos Incompletos',
        'Asegurece de rellenar todos los campos',
        'info'
      )
    }else{
      let cont=0;
    console.log(numeroTarjeta)
    let trimmedStr = numeroTarjeta.replace(/\s+/g, '');
    // Verificar que el número tenga el formato correcto para la marca de tarjeta
    const regexVisa = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const regexMastercard = /^5[1-5][0-9]{14}$/;
    const regexAmericanExpress = /^3[47][0-9]{13}$/;
    if (!regexVisa.test(trimmedStr) && !regexMastercard.test(trimmedStr) && !regexAmericanExpress.test(trimmedStr)) {
      console.log (false);
    }else{
      console.log (true);
      cont+=1;
    }
  
    // Aplicar el algoritmo de Luhn para validar el número de tarjeta
    let suma = 0;
    let invertir = true;
    for (let i = trimmedStr.length - 1; i >= 0; i--) {
      var digito = parseInt(trimmedStr.charAt(i), 10);
      if (invertir) {
        digito *= 2;
        if (digito > 9) {
          digito -= 9;
        }
      }
      suma += digito;
      invertir = !invertir;
    }
    if (suma % 10 !== 0) {
      console.log (false);
    }else{
      console.log (true);
      cont+=1;
    }
  
    // Verificar que la tarjeta sea emitida por un banco y una marca de tarjeta válidos
    const bin = parseInt(trimmedStr.substring(0, 6), 10);
    if ((bin >= 400000 && bin <= 499999) || (bin >= 510000 && bin <= 559999) || (bin >= 340000 && bin <= 349999) || (bin >= 370000 && bin <= 379999)) {
      console.log (true);
      cont+=1;
    }else{
      console.log (false);
    }
    

    if(cont>=2){
      
      swal.fire(
        'Procesando Compra',
        'Gracias por su preferencia',
        'success'
        
      )
      window.location.href = 'validar';
    }else{
      swal.fire(
        'Tarjeta Invalida',
        'Asegurece de colocar una tarejta valida',
        'info'
      )
    }
    }
    
    
  }

  PagarEnvio(){
    window.location.href = 'validar';
  }


}
