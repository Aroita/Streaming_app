import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { URL_FROTEND, URL_SERVICIOS } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token:any = null;
  user:any = null;

  constructor(
    public http: HttpClient,
    public router: Router,
  ) {
    //this.initAuth();
  }


  initAuth(){
    if(localStorage.getItem("token")){
      this.user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") ?? '') : null;
      this.token = localStorage.getItem("token");
    }
  }

  login_ecommerce(email:string,password:string){
    let URL = URL_SERVICIOS+"/auth/login_plataforma";
    return this.http.post(URL,{email: email,password: password}).pipe(
      map((auth: any) => {
        const result = this.setAuthFromLocalStorage(auth);
        return result;
      }),
      catchError((err) => {
        console.error('err', err);
        return of(undefined);
      })
    );
  }

  setAuthFromLocalStorage(auth:any){
    if(auth && auth.access_token){
      localStorage.setItem("token",auth.access_token);
      localStorage.setItem("user", JSON.stringify(auth.user));
      return true;
    }
    return false;
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setTimeout(() => {
      location.href = URL_FROTEND + "/auth/login";
    }, 50);
  }

  register(){

  }

}
