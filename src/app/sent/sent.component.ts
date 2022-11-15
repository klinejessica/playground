import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Postcards } from './sent.service';
import { SentService } from './sent.service';


@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss']
})
export class SentComponent implements OnInit {
  error: any;
  postcards: Postcards | undefined;

  constructor(private httpClient: HttpClient, private sentService: SentService) { }


  ngOnInit() {
    this.showData();

  }

  showData() {
    this.sentService.getData()
          .subscribe((data: Postcards) => this.postcards = {
          postcardId: data.postcardId,
          toMember: data.toMember,
          toCountry: data.toCountry,
          sentDate: data.sentDate,
          receivedDate: data.receivedDate,
          img:data.img
      });
  }


}
