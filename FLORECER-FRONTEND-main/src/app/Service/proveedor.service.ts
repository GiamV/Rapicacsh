import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from '../Models/Proveedor';
import { DetalleProveedor } from '../Models/DetalleProveedor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private urlEndPoint:string="http://localhost:8080/proveedor"
  private urlEndPoint2:string="http://localhost:8080/detalleProveedor"
  constructor(private http:HttpClient) { } 

  getProveedor():Observable<Proveedor[]>{
    return this.http.get<Proveedor[]>(this.urlEndPoint + "/proveedores");
  }

  createProveedores(proveedor:Proveedor){
    return this.http.post<Proveedor>(this.urlEndPoint + "/ProveedorNew",proveedor )
  } 

  getProveedoresID(idpro: number):Observable<DetalleProveedor[]>{
    return this.http.get<DetalleProveedor[]>(this.urlEndPoint2 + "/detallesProvid/"+idpro);
  }

  getProveedorId(idProveedor:number){
    return this.http.get<Proveedor>(this.urlEndPoint+"/proveedores/"+idProveedor);
  }

  deleteProveedorEstado(proveedor:Proveedor):Observable<any>{
    return this.http.delete<Proveedor>(this.urlEndPoint+"/proveedorestado/"+proveedor.idProveedor);
  }

  updateProvee(proveedor:Proveedor){
    return this.http.put<Proveedor>(this.urlEndPoint+"/ProveedorUpdate/"+proveedor.idProveedor,proveedor);
  }
  
}
