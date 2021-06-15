import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/services/data.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import{ init } from 'emailjs-com';
import { Router } from '@angular/router';
init("user_38SCnGCclbvkviZ4c4OvJ");

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(6)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    Id:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(4)]),
    cpassword:new FormControl('',[Validators.required])
  })
  public name:any;
  public email:any;
  public otp:any;
  public verifyotp:any;
  public regiform :boolean;
  incorrect=false;
  constructor(private service:DataService,private router:Router) { }

  ngOnInit(): void {
    localStorage.clear();
    this.regiform=true;
  }

 
registeruser(){
 
  if(this.register.value.password==this.register.value.cpassword){ 
  this.name=this.register.value.name;
  this.email=this.register.value.email;
  this.otp=Math.floor((Math.random() * 10000)+1);
  this.incorrect=false;
  this.regiform=false;
  }else{
    this.incorrect=true;
  }
}

public sendEmail(e: Event) {
  e.preventDefault();
  emailjs.sendForm('service_fjq70hp', 'template_b7imznd', e.target as HTMLFormElement, 'user_38SCnGCclbvkviZ4c4OvJ')
    .then((result: EmailJSResponseStatus) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
}
verification(){
  
if(this.verifyotp==this.otp){
  this.register.value.cart=[];
  this.register.value.verified=true;
  this.service.addusers(this.register.value).subscribe(data=>{
    localStorage.setItem("user","pass");
    
      this.router.navigateByUrl('login')
 })
}else{
  alert("you have entered wrong otp")
}
}
gotologin(){
  this.router.navigateByUrl('login');
}
aboutus(){
  this.router.navigateByUrl('homepage');
}
}
