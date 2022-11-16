import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


export interface Numbers{
  country?: string;
  sent?: Date;
  received?: Date;
  avgtravelsent?: Number;
  avgtravelreceived?: Number;
}
@Injectable({
    providedIn: 'root'
  })

@Injectable()
export class StatsService {
    getNumbers() {
      throw new Error('Method not implemented.');
    }
    sentUrl = 'assets/sentdata.json';

    constructor(private http: HttpClient){}

    // getData() {
    //     return this.http.get<any>('assets/products-small.json')
    //     .toPromise()
    //     .then(res => <Numbers[]>res.data)
    //     .then(data => { return data; });
    // }
}
