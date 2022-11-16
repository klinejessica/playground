import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


export interface Postcards{
  postcardId?: string;
  toMember?: string;
  toCountry?: string;
  sentDate?: Date;
  receivedDate?: Date;
  img?:number;
}
@Injectable({
    providedIn: 'root'
  })

@Injectable()
export class SentService {
    sentUrl = 'assets/sentdata.json';

    constructor(private http: HttpClient){}

    getData(){
      return this.http.get<Postcards>(this.sentUrl);
    }

   
}


