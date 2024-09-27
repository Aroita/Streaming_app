import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string = '';
  password:string = '';
  constructor(
    public AuthService: AuthService,
  ) {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(this.AuthService.user){
      this.AuthService.router.navigateByUrl("/");
    }
  }

  login(){
    if(!this.email){
      alert("NECESITAS DIGITAR UN CORREO ELECTRONICO");
    }
    if(!this.password){
      alert("NECESITAS DIGITAR UNa contraseña");
    }
    this.AuthService.login_ecommerce(this.email,this.password).subscribe((resp:any) => {
      console.log(resp);
      if(resp){
        this.AuthService.router.navigateByUrl("/");
      }else{
        alert("LAS CREDENCIALES SON INCORRECTAS");
      }
    })

  }



}
