import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginguardGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(){ 
   if(localStorage.getItem("user")){ 
    return true;
   }else{ 
     this.router.navigateByUrl('');
     return false;
  }
}
  
}
