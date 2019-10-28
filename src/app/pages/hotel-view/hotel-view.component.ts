import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from 'src/app/models/hotel';
import { HotelsService } from 'src/app/services/hotels.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-hotel-view',
  templateUrl: './hotel-view.component.html',
  styleUrls: ['../hotel/hotel.component.css','./hotel-view.component.css']
})
export class HotelViewComponent implements OnInit {
  id: string;
  hotel: Hotel;
  constructor(private activate: ActivatedRoute,
              private router: Router,
              private hotelService: HotelsService) { }

  ngOnInit() {
    this.id = this.activate.snapshot.params['id'];
    this.getDataHotel();
  }

  getDataHotel() {
    this.hotelService.getHotel(this.id)
        .subscribe( (hotel: Hotel) => {
          this.hotel = hotel;
        });
  }

  deleteHotel() {
    
    this.hotelService.deleteHotel(this.id)
        .subscribe( (resp: any) => {
          if(resp.deleted) {
            Swal.fire({
              position: 'top-end',
              type: 'success',
              title: 'Hotel borrado',
              showConfirmButton: false,
              timer: 2500
            })
            this.router.navigate(['hoteles']);
            return;
          } 
          Swal.fire({
            position: 'top-end',
            type: 'info',
            title: 'No se pudo borrar el hotel',
            showConfirmButton: false,
            timer: 2500
          })
        });
  }
}
