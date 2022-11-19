import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photo.service';
import { Image } from './image.interface';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {

  images: Image[] =[];
  photos: any;
  displayCustom: boolean;
  activeIndex: number = 0;
  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

  constructor(private photoService: PhotoService) { 
    this.displayCustom = false;
  }

  ngOnInit(){
    this.photoService.getPhotos().subscribe(response=>{
      this.images = response;
      console.log(response);
    })
  }

  expandPhoto(index: number){
    this.photos = this.images.map(img => {
      return{
        previewImageSrc: img.thumbnailImageSrc,
        thumnailImageSrc: img.thumbnailImageSrc,
        sender: img.sender,
        desc: img.desc,
        date: img.date
      };
    });
    this.activeIndex = index;
    this.displayCustom = true;
  }
}
