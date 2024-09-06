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

    draftedBlogs():Observable<any>{
        return this.http.get(`${this.blogApi}/getDrafs`)
    }

    postedBlogs():Observable<any>{
        return this.http.get(`${this.blogApi}/postedBlogs`)
    }

    getSingleBlog(id:string):Observable<any>{
        return this.http.get(`${this.blogApi}/singleGet/${id}`)
    }

    deleteBlog(id:string):Observable<any>{
        return this.http.delete(`${this.blogApi}/${id}`)
    }

}