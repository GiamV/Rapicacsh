import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DetalleProveedor } from '../Models/DetalleProveedor';

@Injectable({
  providedIn: 'root'
})
export class DetalleproveService {

  constructor(private http:HttpClient) { }
  private urlEndPoint:string="http://localhost:8080/detalleProveedor"

  createDetalleProve(DetallePro:DetalleProveedor){
    return this.http.post<DetalleProveedor>(this.urlEndPoint + "/detallesProvnew",DetallePro )
  } 
}
