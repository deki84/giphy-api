import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getTrandingGifs() {
    return this.http.get(
      `https://api.giphy.com/v1/gifs/trending?api_key=%${environment.giphyApiKey}$limit=50`
    );
  }
}
