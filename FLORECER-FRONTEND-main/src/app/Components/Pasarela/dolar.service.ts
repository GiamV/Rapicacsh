import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DolarService {

  constructor(private http:HttpClient) { }

  private urlEndPoint:string="https://api.apilayer.com/exchangerates_data/convert?to=USD&from=PEN&amount="
  
  getConvertir(monto:number){
    return this.http.get(this.urlEndPoint +`${monto}`);
  }
}
