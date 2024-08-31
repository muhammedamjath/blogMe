import { Injectable } from "@angular/core";
import { environment } from "../../environment/environment";

@Injectable({
    providedIn:'root'
})

export class SharedService{
    api = environment.baseUrl

    
}