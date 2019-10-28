import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/services/hotels.service';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css']
})
export class HotelesComponent implements OnInit {
hotels: Hotel[] = [];
filters = {
  name: '',
  stars: '0'
}
loading = true;
  constructor(private hotelService: HotelsService) { }

  ngOnInit() {
    this.getHotels();
  }
  applyFilter(filter){
    this.filters = filter;
    this.getHotels();
  }
  getHotels(){
    this.loading = true;
    this.hotels = [];
    this.hotelService.getHotels(this.filters).subscribe( (resp:any) => {
      this.hotels = resp.hotels;
      this.filters = resp.filters;
      this.loading = false;
    });
  }
}
