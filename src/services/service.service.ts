import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
userurl="http://localhost:3000/users";
producturl="http://localhost:3000/products";
send=new BehaviorSubject({});
collect=<any>this.send.asObservable();
  constructor(private http:HttpClient) { }
  addusers(data){
    return this.http.post(this.userurl,data);
  }
  getusers(){
    return this.http.get(this.userurl);
  }
  getprod(){
    return this.http.get(this.producturl);
  }
  updateuser(id,data){
    return this.http.put(this.userurl+"/"+`${id}`,data);
  }
}
