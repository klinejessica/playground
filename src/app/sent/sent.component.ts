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

  constructor(private httpClient: HttpClient, private sentService: SentService) { }


  ngOnInit() {
  }

  
}
