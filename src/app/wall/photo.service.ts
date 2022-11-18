import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import galleryJson from '../../assets/documents/gallery.json';
import { Image } from './image.interface';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  // imgURL = '/assets/images/';
  imgURL = '../../assets/documents/gallery.json'

  constructor(private http: HttpClient) { }

  // getPhotos(){
  //   return this.http.get(this.imgURL);
  // }

  getPhotos(): Observable<Image[]> {
    return of(galleryJson);
  }
}
