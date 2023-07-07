import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Dashboard/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isAdminLogged:boolean|undefined
  usrFormGroup: FormGroup;
  user:object|undefined
  constructor( private AuthServices:AuthService,private fb: FormBuilder,private router:Router) {
    this.usrFormGroup=this.fb.group({
      userName:['',[Validators.required]],

     password:['',[Validators.required]],
    })
  }
  get userName(){
    return this.usrFormGroup.get('email');
  }
  get password(){
    return this.usrFormGroup.get('password');
  }
  ngOnInit(): void {
    this.isAdminLogged=this.AuthServices.isAdminLogged
  }
  login(){
    if(this.usrFormGroup.valid){
    this.AuthServices.getallAdmin().subscribe(result=>{
      let user=result.find((a:any)=>{ 
         return   a.userName==this.usrFormGroup.value.userName&&a.password==this.usrFormGroup.value.password})
      if(user){
        this.AuthServices.login(this.usrFormGroup.value.userName,this.usrFormGroup.value.password)
        this.isAdminLogged=this.AuthServices.isAdminLogged
        alert("you are Admin")
   
           this.router.navigate(["/Dashboard"])

      }else{
        alert("you not Admin")
      }
    })
  }
    

  }
  logout(){
    this.AuthServices.logout()
    this.isAdminLogged=this.AuthServices.isAdminLogged

  }

}
