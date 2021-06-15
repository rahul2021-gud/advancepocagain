import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(){ 
    if(localStorage.getItem("home")){ 
    
    return true;
    }
    else{ 
    this.router.navigateByUrl('login');
    return false;
  }
  
}
}
