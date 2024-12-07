import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetalleVenta } from '../Models/DetalleVenta';
import { Observable } from 'rxjs';
import { CabeceraVenta } from '../Models/CabeceraVenta';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {

  private url:string="http://localhost:8080/detalle/detalleCarrito/";

  constructor(private http:HttpClient) { }

  listarDetalles(idUser:number):Observable<DetalleVenta[]>{
    return this.http.get<DetalleVenta[]>(this.url+idUser);
  }

  createDetalle(detalle:DetalleVenta){
    return this.http.post<DetalleVenta>("http://localhost:8080/detalle" + "/detallenew",detalle)
  }

  actualizarCant(id:number,item:DetalleVenta){
    return this.http.put("http://localhost:8080/detalle/detalleCarrito/"+id,item);
  }

  actualizarTipo(id:number,cab:CabeceraVenta){
    return this.http.put("http://localhost:8080/cabecera/cabeceratipo/"+id,cab);
  }

  eliminarCarrito(id:number){
    return this.http.delete("http://localhost:8080/detalle/detalleCarritodelete/"+id);
  }

  getCabecera(idUser:number):Observable<CabeceraVenta>{
    return this.http.get<CabeceraVenta>("http://localhost:8080/cabecera/cabeceraCarrito/"+idUser);
  }

  addCabCarrito(idUser:number){
    return this.http.post<CabeceraVenta>("http://localhost:8080/cabecera/cabeceraregistro/"+idUser,CabeceraVenta);
  }
  // editar
  getCabeU(idUser:number){
    return this.http.get<CabeceraVenta>("http://localhost:8080/cabecera/"+"cabeceraidu/"+idUser);
  }

  venderCab(idCabe:number,cabecera:CabeceraVenta){
      return this.http.put("http://localhost:8080/cabecera/venderCabecera/"+idCabe,cabecera);
  }

  listarCabUser(idUser:number):Observable<CabeceraVenta[]>{
    return this.http.get<CabeceraVenta[]>("http://localhost:8080/cabecera/cabeceracliente/"+idUser);
  }

  listarDetUser(idCab:number):Observable<DetalleVenta[]>{
    return this.http.get<DetalleVenta[]>("http://localhost:8080/detalle/detallescliente/"+idCab);
  }

  listarCabTodos():Observable<CabeceraVenta[]>{
    return this.http.get<CabeceraVenta[]>("http://localhost:8080/cabecera/cabeceratodos");
  }
  findAll():Observable<CabeceraVenta[]>{
    return this.http.get<CabeceraVenta[]>("http://localhost:8080/cabecera/cabeceras");
  }
  listarCabTodosP():Observable<CabeceraVenta[]>{
    return this.http.get<CabeceraVenta[]>("http://localhost:8080/cabecera/cabeceratodosp");
  }
  listarCabTodosFull():Observable<CabeceraVenta[]>{
    return this.http.get<CabeceraVenta[]>("http://localhost:8080/cabecera/cabeceratodosfull");
  }

  consultaVentas():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:8080/cabecera/consultaventa");
  }
  contarVentas():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:8080/cabecera/contarventa");
  }
  
  


}
