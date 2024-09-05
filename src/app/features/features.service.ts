import { Injectable } from "@angular/core";
import { environment } from "../../environment/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})

export class FeatureService{

    constructor(private http:HttpClient){}
    api =environment.baseUrl

    blogApi = `${this.api}/client/blog`

    blogPost(data:any):Observable<any>{        
        return this.http.post(this.blogApi,data)
    }

    fullBlogGet():Observable<any>{
        return this.http.get(this.blogApi)
    }

}