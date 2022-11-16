import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { Postcards } from './sent.service';
import { ReceivedService } from './received.service';
import * as data from '../receiveddata.json';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.scss']
})
export class ReceivedComponent implements OnInit {
  postcards: any = (data as any).default;

  constructor(private httpClient: HttpClient, private receivedService: ReceivedService) { }


  ngOnInit() {
  }

  
}
