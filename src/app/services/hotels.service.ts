import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  url: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getHotels(filters){
    return this.http.get(`${this.url}/hotels?name=${filters.name}&stars=${filters.stars}`);
  }

  getHotel(id: string){
    return this.http.get(`${this.url}/hotels/${id}`);
  }

  deleteHotel(id: string){
    return this.http.delete(`${this.url}/hotel/${id}`);
  }
}
