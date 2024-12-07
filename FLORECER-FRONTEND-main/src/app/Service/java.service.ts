import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetalleProveedor } from '../Models/DetalleProveedor';
import { CabeceraVenta } from '../Models/CabeceraVenta';

@Injectable({
  providedIn: 'root'
})
export class JavaService {

  constructor(private http:HttpClient) { }
  private urlEndPoint:string="http://localhost:8080/detalleProveedor"
  private urlEndPoint2:string="http://localhost:8080/correo/plantilla"

  createDetalleProve(DetallePro:DetalleProveedor){
    return this.http.post<DetalleProveedor>(this.urlEndPoint + "/detallesProvnew",DetallePro )
  }
  enviarCorreoElectronico(idUser:number,correo:string,direccion:string,distrito:string,nrodom:string,ref:string) {
    
    return this.http.get(this.urlEndPoint2 + "/"+idUser +"/"+correo+"/Av. Carabayllo/Comas/1671/Al lado del Mercado" );
  }
}
