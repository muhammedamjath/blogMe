import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class jwtIntercepter implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const isLogedIn = localStorage.getItem('tocken');
        if(isLogedIn){
            const authRequst = req.clone({
                setHeaders:{
                    Authorization:`Bearer ${isLogedIn}`
                }
            })
            return next.handle(authRequst)
        }else{
            return next.handle(req)
        }
    }
}