import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { Postcards } from './sent.service';
import { SentService } from './sent.service';
import * as data from '../sentdata.json';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss']
})
export class SentComponent implements OnInit {
  postcards: any = (data as any).default;
  //pagination
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5,10,15,20];


  constructor(private httpClient: HttpClient, private sentService: SentService) { }


  ngOnInit() {
    this.sentList();
  }

  sentList(): void {
    this.sentService.getData().subscribe((response)=>{
      this.postcards = response;
      console.log(response);
    })
  }

  onTableDataChange(event: any){
    this.tableSize = event;
    this.sentList();
  }

  onTableSizeChange(event: any){
    this.tableSize = event.target.value;
    this.page = 1;
    this.sentList();
  }
}
