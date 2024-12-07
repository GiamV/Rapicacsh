import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlEndPoint:string="http://localhost:8080/usuario";
  private urlEndPoint2:string="http://localhost:8080/correo";
  
  
  constructor(private http:HttpClient) { }

  Carga(){
    let node = document.createElement("script");
    node.src="../../assets/js/file.js";
    node.type="text/javascript";
    document.getElementsByTagName("head")[0].appendChild(node);
    
  }

  getUsers():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.urlEndPoint + "/usuarios");
  }
  // editar
  getUserId(idUser:number){
    return this.http.get<Usuario>(this.urlEndPoint+"/usuario/"+idUser);
  }

  createUser(user:Usuario){
    return this.http.post<Usuario>(this.urlEndPoint + "/usuarionew",user)
  }

  updateUser(user:Usuario){
    return this.http.put<Usuario>(this.urlEndPoint+"/usuarioupdate/"+user.idUsuario,user);
  }

  generaToken(user:String,passw:String){
    return this.http.get<number>(this.urlEndPoint+"/"+user+"/"+passw);
  }

  getUserbyUaser(username:String){
    return this.http.get<Usuario>(this.urlEndPoint+"/"+username);
  }

  loginUser(token: string){
    localStorage.setItem("token",token)
    return true;
  }

  isLoggedIn(){
    let token =localStorage.getItem("token");
    if (token==undefined || token=='' || token==null){
      return false;
    } else{
      return true;
    }
  }

  
  logout(){
    localStorage.removeItem('token')
    return true;
  }

  getToken(){
    return localStorage.getItem("token");
  }
  getCorreo(idUser:number,correo:string){
    return this.http.get<Boolean>(this.urlEndPoint2 + "/enviar/"+idUser +"/"+correo)
  }
}
