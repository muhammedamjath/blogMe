import { Injectable } from "@angular/core";
import { environment } from "../../../environment/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

interface signupModel{
  name:string,
  email:string,
  password:string
}

interface login{
  email:string,
  password:string
}

@Injectable({
    providedIn: 'root',
  })


  export class AuthService {

    constructor(private http:HttpClient){}

    // api
    api = environment.baseUrl

    // signup post
    sighupApi =  `${this.api}/auth/register`
    signupPost(data:signupModel):Observable<any>{
      return this.http.post(this.sighupApi,data)
    }

    // login 
    loginApi  = `${this.api}/auth/login`
    loginpost(data:login):Observable<any>{
      return this.http.post(this.loginApi,data)
    }

    // reset password
    resetpassApi = `${this.api}/auth/resetPassword`
    resetPassword(data:string):Observable<any>{
      return this.http.post(this.resetpassApi,data)
    }

    updatePassApi = `${this.api}/auth/updatepassword`
    updatePassword(data: { email: string, newPassword: string }) {
      return this.http.post(this.updatePassApi, data);
    }
  }
  