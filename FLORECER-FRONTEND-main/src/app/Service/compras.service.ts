import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GuiaEntrada } from '../Models/GuiaEntrada';
import { DetalleGuiaEntrada } from '../Models/DetalleGuiaEntrada';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  

  constructor(private http:HttpClient) { }

  private urlEndPoint:string="http://localhost:8080/guiaEntrada";

  private urlEndPoint2:string="http://localhost:8080/detalleGuiaEntrada";
  
  getCabeceraXUser(idUser:number){
    return this.http.get<GuiaEntrada>(this.urlEndPoint+"/guiaEntradaUser/"+idUser);
  }

  getCabecerasPend():Observable<GuiaEntrada[]>{
    return this.http.get<GuiaEntrada[]>(this.urlEndPoint+"/guiaEntradasPendiente");
  }

  getDetallePen(idCab:number):Observable<DetalleGuiaEntrada[]>{
    return this.http.get<DetalleGuiaEntrada[]>(this.urlEndPoint2+"/detallesGuiaEncodId/"+idCab);
  }

  getDetalleCarCompra(idUser:number):Observable<DetalleGuiaEntrada[]>{
    return this.http.get<DetalleGuiaEntrada[]>(this.urlEndPoint2 + "/detalleCompra/"+idUser);
  }

  actualizarCant(id:number,item:DetalleGuiaEntrada){
    return this.http.put( this.urlEndPoint2+"/detalleGuiaCarrito/"+id,item);
  }

  createDetalle(detalle:DetalleGuiaEntrada){
    return this.http.post<DetalleGuiaEntrada>(this.urlEndPoint2 + "/detalleGuiaEntradanew",detalle )
  } 

  venderCab(idGuia:number,guia:GuiaEntrada){
    return this.http.put(this.urlEndPoint+"/ComprarCabecera/"+idGuia,guia);
}
  OrdenHecha(idGuia:number,estado:number,guia:GuiaEntrada){
  return this.http.put(this.urlEndPoint+"/guiaEnUpdate/"+idGuia+"/"+estado,guia);
}
eliminarDetalle(id:number){
    return this.http.delete(this.urlEndPoint2+"/detalleGuiaEntradaDelete/"+id);
  }

  
  
}
